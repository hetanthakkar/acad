import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating";
class Home extends Component {
  render() {
    return (
      <View
        style={{
          flexWrap: "wrap",
          width: this.props.width / 5 - 30,
          height: this.props.width / 5 - 30,
          borderWidth: 1,
          borderColor: "white",
          marginHorizontal: 30,
          marginVertical: 30,
        }}
      >
        <View style={{ flex: 2 }}>
          <Image style={{ flex: 1 }} source={this.props.image} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            // justifyContent: "space-around",
            borderBottomRadius: 22,
            backgroundColor: "#e3f2fd",
            paddingLeft: 10,
          }}
        >
          {/* <Text style={{ fontSize: 10, color: "yellow" }}>
            {this.props.type}
          </Text> */}
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 15, marginTop: 20, marginLeft: "25%" }}>
            Starts from {this.props.price}$
          </Text>
          {/* <StarRating
            disable={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={10}
          /> */}
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
