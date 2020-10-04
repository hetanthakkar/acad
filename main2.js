import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
const width = Dimensions.get("window");
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./icons";
export default class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.openDrawer}
        style={{
          marginTop: "6%",
          marginLeft: "2%",
          marginRight: "6%",
        }}
      >
        {/*Donute Button Image */}
        <Icon family="FontAwesome" name="bars" size={23} color="#FFF" />
      </TouchableOpacity>
    );
  }
}
