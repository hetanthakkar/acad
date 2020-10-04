"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultCache = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _typenames = require("../modules/typenames");

var _hash = require("./hash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var checkStatus = function checkStatus(redirectMode) {
  if (redirectMode === void 0) {
    redirectMode = 'follow';
  }

  return function (response) {
    // If using manual redirect mode, don't error on redirect!
    var statusRangeEnd = redirectMode === 'manual' ? 400 : 300;

    if (response.status >= 200 && response.status < statusRangeEnd) {
      return response;
    }

    var err = new Error(response.statusText);
    err.response = response;
    throw err;
  };
};

var defaultCache = function defaultCache(store) {
  return {
    invalidate: function invalidate(hash) {
      return new Promise(function (resolve) {
        delete store[hash];
        resolve(hash);
      });
    },
    invalidateAll: function invalidateAll() {
      return new Promise(function (resolve) {
        store = {};
        resolve();
      });
    },
    read: function read(hash) {
      return new Promise(function (resolve) {
        resolve(store[hash] || null);
      });
    },
    update: function update(callback) {
      return new Promise(function (resolve) {
        if (typeof callback === 'function') {
          Object.keys(store).forEach(function (key) {
            callback(store, key, store[key]);
          });
        }

        resolve();
      });
    },
    write: function write(hash, data) {
      return new Promise(function (resolve) {
        store[hash] = data;
        resolve(hash);
      });
    }
  };
};

exports.defaultCache = defaultCache;

var Client =
/*#__PURE__*/
function () {
  // Graphql API URL
  // Internal store
  // Options for fetch call
  // Map of subscribed Connect components
  // Cache object
  function Client(opts) {
    this.url = void 0;
    this.store = void 0;
    this.fetchOptions = void 0;
    this.subscriptions = void 0;
    this.cache = void 0;

    if (!opts) {
      throw new Error('Please provide configuration object');
    } // Set option/internal defaults


    if (!opts.url) {
      throw new Error('Please provide a URL for your GraphQL API');
    }

    this.url = opts.url;
    this.fetchOptions = opts.fetchOptions || {};
    this.store = opts.initialCache || {};
    this.cache = opts.cache || defaultCache(this.store);
    this.subscriptions = {}; // Bind methods

    this.executeQuery = this.executeQuery.bind(this);
    this.executeMutation = this.executeMutation.bind(this);
    this.updateSubscribers = this.updateSubscribers.bind(this);
    this.refreshAllFromCache = this.refreshAllFromCache.bind(this);
  }

  var _proto = Client.prototype;

  _proto.updateSubscribers = function updateSubscribers(typenames, changes) {
    // On mutation, call subscribed callbacks with eligible typenames
    for (var sub in this.subscriptions) {
      if (this.subscriptions.hasOwnProperty(sub)) {
        this.subscriptions[sub](typenames, changes);
      }
    }
  };

  _proto.subscribe = function subscribe(callback) {
    // Create an identifier, add callback to subscriptions, return identifier
    var id = (0, _v.default)();
    this.subscriptions[id] = callback;
    return id;
  };

  _proto.unsubscribe = function unsubscribe(id) {
    // Delete from subscriptions by identifier
    delete this.subscriptions[id];
  };

  _proto.refreshAllFromCache = function refreshAllFromCache() {
    var _this = this;

    // On mutation, call subscribed callbacks with eligible typenames
    return new Promise(function (resolve) {
      for (var sub in _this.subscriptions) {
        if (_this.subscriptions.hasOwnProperty(sub)) {
          _this.subscriptions[sub](null, null, true);
        }
      }

      resolve();
    });
  };

  _proto.executeQuery = function executeQuery(queryObject, skipCache) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var query = queryObject.query,
          variables = queryObject.variables; // Create query POST body

      var body = JSON.stringify({
        query: query,
        variables: variables
      }); // Create hash from serialized body

      var hash = (0, _hash.hashString)(body); // Check cache for hash

      _this2.cache.read(hash).then(function (data) {
        if (data && !skipCache) {
          var _typeNames = (0, _typenames.gankTypeNamesFromResponse)(data);

          resolve({
            data: data,
            typeNames: _typeNames
          });
        } else {
          var fetchOptions = typeof _this2.fetchOptions === 'function' ? _this2.fetchOptions() : _this2.fetchOptions; // Fetch data

          fetch(_this2.url, _extends({
            body: body,
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }, fetchOptions)).then(checkStatus(fetchOptions.redirect)).then(function (res) {
            return res.json();
          }).then(function (response) {
            if (response.data) {
              // Grab typenames from response data
              var _typeNames2 = (0, _typenames.gankTypeNamesFromResponse)(response.data); // Store data in cache, using serialized query as key


              _this2.cache.write(hash, response.data);

              resolve({
                data: response.data,
                typeNames: _typeNames2
              });
            } else {
              reject({
                message: 'No data'
              });
            }
          }).catch(function (e) {
            reject(e);
          });
        }
      });
    });
  };

  _proto.executeMutation = function executeMutation(mutationObject) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var query = mutationObject.query,
          variables = mutationObject.variables; // Convert POST body to string

      var body = JSON.stringify({
        query: query,
        variables: variables
      });
      var fetchOptions = typeof _this3.fetchOptions === 'function' ? _this3.fetchOptions() : _this3.fetchOptions; // Call mutation

      fetch(_this3.url, _extends({
        body: body,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }, fetchOptions)).then(checkStatus(fetchOptions.redirect)).then(function (res) {
        return res.json();
      }).then(function (response) {
        if (response.data) {
          // Retrieve typenames from response data
          var _typeNames3 = (0, _typenames.gankTypeNamesFromResponse)(response.data); // Notify subscribed Connect wrappers


          _this3.updateSubscribers(_typeNames3, response);

          resolve(response.data);
        } else {
          reject({
            message: 'No data'
          });
        }
      }).catch(function (e) {
        reject(e);
      });
    });
  };

  return Client;
}();

exports.default = Client;