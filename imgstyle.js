import { StyleSheet, Dimensions, Platform } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3742fa",
  },
  capturePhoto: {
    width: "42%",
    borderRadius: 9,
    margin: "5%",
    color: "white",
    backgroundColor: "#3742fa",
    top: screenHeight * 8,
    left: screenWidth,
    height: screenHeight * 7,
  },
  capturePhotoText: {
    color: "white",
    textAlign: "center",
    fontSize: 28,
    textAlignVertical: "center",
  },
  upload: {
    width: "40%",
    margin: "5%",
    borderRadius: 9,
    backgroundColor: "#3742fa",
    top: screenHeight,
    left: screenWidth,
    height: screenHeight * 6.5,
  },
  uploadText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 21,
    textAlignVertical: "center",
  },
  uploadLater: {
    width: "60%",
    margin: "5%",
    top: screenHeight * 50,
    borderRadius: 9,
    backgroundColor: "#3742fa",
  },
  uploadLaterText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    textAlignVertical: "center",
  },
  mainPage: {
    width: "60%",
    margin: "5%",
    top: screenHeight * -10,
    borderRadius: 9,
    backgroundColor: "#3742fa",
  },
  mainPageText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    textAlignVertical: "center",
  },
  view: {
    marginTop: 30,
    width: 250,
    borderRadius: 3,
    elevation: 2,
  },
  viewIos: {
    backgroundColor: "#4834DF",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  image: {
    left: screenWidth,
    top: screenHeight * 5,
    width: screenWidth * 60,
    height: screenHeight * 35,
    borderRadius: 150,
    backgroundColor: "#3742fa",
  },
});
export default styles;
