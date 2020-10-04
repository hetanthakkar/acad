import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./home";
import data from "./data";
const { width } = Dimensions.get("window");
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var specifics;
export default class cat extends Component {
  state = {
    skill: "Money Related",
    specifics: [],
  };
  async componentDidMount() {
    if (this.state.skill == "Coding") specifics = data[0];
    if (this.state.skill == "Musical Instrument") specifics = data[1];
    if (this.state.skill == "Academics") specifics = data[2];
    if (this.state.skill == "New Language") specifics = data[3];
    if (this.state.skill == "Money Related") specifics = data[4];
    await this.setState({ specifics });
    if (this.state.specifics.length > 4) {
      this.setState({ columnCount: 2 });
    } else {
      this.setState({ columnCount: this.state.specifics.length });
    }
  }
  display = (item) => {
    return (
      <Home
        width={width}
        name={item.name}
        image={item.image}
        type="PRIVATE ROOM - 2 BEDS"
        price={item.price}
        rating={4}
      />
    );
  };
  render() {
    return (
      <LinearGradient
        colors={["#09C6F9", "#045DE9"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ height: screenHeight * 100 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <ScrollView scrollEventThrottle={16}>
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "700",
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  {this.state.skill}
                </Text>
                <FlatList
                  contentContainerStyle={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignSelf: "center",
                    marginTop: "1%",
                  }}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.specifics}
                  renderItem={({ item }) => this.display(item)}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
