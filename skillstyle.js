import { StyleSheet, Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles1 = StyleSheet.create({
  skills: {
    alignSelf: "center",
    color: "white",
    fontSize: 18,
  },
  about: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    marginTop: screenHeight * 2,
    alignSelf: "center",
    width: screenWidth * 40,
    height: screenHeight * 15,
    borderColor: "white",
    borderRadius: 7,
    borderWidth: 2,
    outlineWidth: 0,
  },

  textInput: {
    color: "white",
    textAlign: "center",
    fontSize: 27,
    marginTop: screenHeight * 2,
    alignSelf: "center",
    width: screenWidth * 25,
    height: screenHeight * 10,
    borderColor: "white",
    borderRadius: 7,
    borderWidth: 2,
  },
  text: {
    alignSelf: "center",
    fontSize: 30,
    marginTop: screenHeight * 5,
    marginBottom: screenHeight * 2,
    color: "#1B9CFC",
    fontWeight: "bold",
  },
  button: {
    marginTop: 80,
    alignSelf: "center",
    backgroundColor: "#0336FF",
    borderRadius: 14,
    width: screenWidth * 40,
    height: screenHeight * 8,
  },
  buttonText: {
    color: "#EAF0F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    textAlignVertical: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#D4E6F1",
  },
  paragraph: {
    margin: "12%",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default styles1;
