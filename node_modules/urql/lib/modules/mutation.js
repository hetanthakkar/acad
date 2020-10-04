"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var mutation = function mutation(q, vars) {
  return {
    query: q,
    variables: vars || {}
  };
};

var _default = mutation;
exports.default = _default;