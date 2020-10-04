import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";

var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles4 = StyleSheet.create({
  dp: {
    height: screenHeight * 25,
    borderRadius: 100,
    width: screenWidth * 12,
    marginTop: screenHeight * 2,
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: screenHeight,
    alignSelf: "center",
  },
  tagLine: {
    alignSelf: "center",
    fontSize: 16,
    paddingTop: screenHeight,
  },
  location: {
    color: "#3498db",
    fontSize: 21,
    fontWeight: "bold",
    marginTop: screenHeight * 2,
    // marginLeft: screenWidth * 11,
  },
  local: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    marginTop: screenHeight * 2,
  },
  about: {
    fontWeight: "bold",
    marginLeft: screenWidth * 4,
    marginTop: screenHeight * 1.5,
    marginRight: screenWidth * 6,
    color: "#3498db",
    fontSize: 21,
    flexWrap: "wrap",
  },
  descriptionTitle: {
    fontWeight: "bold",
    textAlignVertical: "center",
    // marginTop: screenHeight * 1.5,
    color: "#3498db",
    fontSize: 21,
    flexWrap: "wrap",
  },
  skill: {
    alignSelf: "center",
    marginLeft: screenWidth * 40,
    marginTop: screenHeight * 1.5,
    color: "#3498db",
    fontSize: 21,
    flexWrap: "wrap",
  },
  view: { flexDirection: "column", marginLeft: screenWidth * -3 },
  description: {
    fontSize: 22,
    flexWrap: "wrap",
    color: "black",
    textAlignVertical: "center",
    // marginTop: screenHeight * 1.2,
    // marginRight: screenWidth * 50,
  },
  learn: { textAlignVertical: "center", marginTop: screenHeight * 2 },
  skills: {
    marginVertical: screenHeight * 1,
    textAlignVertical: "center",
    alignSelf: "center",
    marginLeft: screenWidth * -2,
    fontSize: 15,
    color: "black",
    // marginTop: screenHeight * 1.5,
    flexWrap: "wrap",
  },
  skills1: {
    fontWeight: "bold",
    marginVertical: screenHeight * 1,
    textAlignVertical: "center",
    fontSize: 15,
    color: "black",

    marginLeft: screenWidth * -24,
    // marginTop: screenHeight * 1.5,
    flexWrap: "wrap",
  },
  learnText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    color: "black",
    marginLeft: screenWidth * -4,
    // marginTop: screenHeight * -1,
    flexWrap: "wrap",
  },
  rate: {
    textAlign: "center",
    fontSize: 25,
    marginTop: screenHeight * 5,
    color: "green",
  },
  rating: {
    textAlign: "center",
    fontSize: 25,
    marginTop: screenHeight * 5,
  },
  doddle: {
    height: screenHeight * 30,
    borderRadius: 10,
    width: screenWidth * 90,
    marginTop: screenHeight * 5,
    marginLeft: screenWidth * 2,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#3498db",
    alignSelf: "center",
    marginTop: screenHeight * 4,
    marginBottom: screenHeight * 4,
    height: screenHeight * 8,
    width: screenWidth * 35,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 34,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    textAlign: "center",
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    marginTop: screenHeight * 1,
  },
});

export default styles4;
