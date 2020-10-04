import { StyleSheet, Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles1 = StyleSheet.create({
  pickerText: {
    marginLeft: 400,
  },
  sign: {
    marginTop: screenHeight * 15,
  },
  signup: {
    color: "#0984e3",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 8,
    textAlign: "center",
  },
  mar: {
    marginTop: screenHeight * 20,
  },
  errorText: {
    color: "yellow",
    textAlign: "center",
    paddingTop: screenHeight,
  },
  customButton: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: screenWidth * 35,
    marginVertical: 30,
    height: screenHeight * 8,
  },
  textStyle: {
    color: "#020cab",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    textAlignVertical: "center",
  },

  errorText: {
    color: "yellow",
    fontFamily: "bold",
    textAlign: "center",
  },
  field: {
    width: 425,
    margin: 10,
    padding: 15,
    fontSize: 18,
    alignSelf: "center",
    borderColor: "white",
    borderBottomWidth: 1,
    color: "white",
    textAlign: "center",
    outlineWidth: 0,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#bdc3c7",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  button: {
    color: "white",
    alignSelf: "center",
    marginTop: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "#D4E6F1",
  },
  myText: {
    color: "white",
    borderWidth: 2,
    borderColor: "#d6d0cf",
    margin: 10,
    padding: 10,
    width: "95%",
    borderRadius: 12,
  },
});
export default styles1;
