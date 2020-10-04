import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./index";
import Myform from "./linear";
export default class Signup extends React.Component {
  componentDidMount = () => {};
  render() {
    return (
      <View style={{ backgroundColor: "#3742fa" }}>
        <Provider store={store}>
          <Myform navigation={this.props.navigation} />
        </Provider>
      </View>
    );
  }
}
