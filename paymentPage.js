import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import firebase from "firebase";
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var firebaseConfig = {
  apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
  authDomain: "new1-930be.firebaseapp.com",
  databaseURL: "https://new1-930be.firebaseio.com",
  projectId: "new1-930be",
  storageBucket: "new1-930be.appspot.com",
  messagingSenderId: "332990256430",
  appId: "1:332990256430:web:640a6413492c34bf2a96bf",
  measurementId: "G-SBPS6449GM",
};
var radio_props = [
  { label: "Male    ", value: "Male" },
  { label: "Female", value: "Female" },
];
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (!Constants.platform.web.ua.includes("Windows")) {
      this.setState({ multiply: 2 });
      this.setState({ orientation: "column" });
    }
    if (Constants.platform.web.ua.includes("Windows")) {
      this.setState({ width: screenWidth * 45 });
    } else {
      this.setState({ width: screenWidth * 90 });
    }
    if (Constants.platform.web.ua.includes("Windows")) {
      this.setState({ width1: screenWidth * 27 });
    } else {
      this.setState({ width1: screenWidth * 5 });
    }
    if (Constants.platform.web.ua.includes("Windows")) {
      this.setState({ width2: screenWidth * 13 });
    } else {
      this.setState({ width2: screenWidth * 45 });
    }
    if (Constants.platform.web.ua.includes("Windows")) {
      this.setState({ width3: screenWidth * -0.5 });
    } else {
      this.setState({ width3: screenWidth * -50 });
    }
    if (Constants.platform.web.ua.includes("Windows")) {
      this.setState({ width4: screenWidth * 15 });
    } else {
      this.setState({ width4: screenWidth * 50 });
    }
  }
  loadFonts() {
    return Font.loadAsync({
      "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    this.props.currentIndex({ index: 3 });
    this.props.navigation.navigate("Entry");
    return true;
  };

  submit = async (values) => {
    this.props.navigation.navigate("Register");
    // fetch("  http://aa33ea691265.ngrok.io/user ", {
    //   method: "GET",
    // });
  };
  renderLoading = () => {
    if (this.state.loading) return <ActivityIndicator size="large" />;
  };
  render() {
    if (true) {
      return (
        <LinearGradient
          colors={["#F1EEFc", "#F1EEFc"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ height: screenHeight * 100 }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              alignSelf: "center",
              marginTop: screenHeight * 2,
              width: screenWidth * 90,
              height: screenHeight,
            }}
          >
            <Text style={styles.bookingDetails}>Booking Details</Text>
          </ScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.modalView}
          >
            <Text style={styles.lessonSummary}>Lesson Summary</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.modalText}> Tutor Name: </Text>
              <Text style={styles.right}> Hetan Thakkar </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.modalText}>Lesson Length:</Text>
              <Text style={styles.right}>45 minutes </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.modalText}>Lesson Name: </Text>
              <Text style={styles.right}> React Native </Text>
            </View>
            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginTop: screenHeight * 3,
              }}
            />
            <Text style={styles.price}>Price Summary </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.modalText}>Lesson Price:</Text>
              <Text style={styles.lessonPrice1}>$300 </Text>
            </View>
            <Text style={styles.price}>Apply Coupon Code </Text>
            <TextInput style={styles.textInput}></TextInput>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F194FF",
                  borderRadius: 5,
                  width: screenWidth * 9,
                  height: screenHeight * 4,
                  marginTop: screenHeight * 2,
                  backgroundColor: "#2196F3",
                }}
                onPress={() => {
                  console.log(modalVisible);
                }}
              >
                <Text style={styles.textCoupon}>Apply Coupon</Text>
              </TouchableOpacity>
              <Text style={styles.applied}> Applied !</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.modalText}>Deducted Price: </Text>
              <Text style={styles.right}>- $100 </Text>
            </View>
            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginTop: screenHeight * 3,
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.totalText}>Total : </Text>
              <Text style={styles.total}>$ 200 </Text>
            </View>

            <TouchableHighlight
              style={styles.pay}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.textStyle}>Proceed to Pay</Text>
            </TouchableHighlight>
          </ScrollView>
        </LinearGradient>
      );
    } else {
      return <View />;
    }
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignSelf: "center",
    marginTop: screenHeight * 7,
    width: screenWidth * 90,
    height: screenHeight,
  },
  modalView: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 0.9,
    padding: screenHeight * 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: screenHeight * 5,
    height: screenHeight * 70,
    shadowOpacity: 0.95,
    shadowRadius: 10,
    elevation: 8,
  },
  pay: {
    backgroundColor: "#fc0f84",
    borderRadius: 20,
    padding: 10,
    width: screenWidth * 20,
    height: screenHeight * 7,
    alignSelf: "center",
    marginTop: screenHeight * 2,
  },
  applied: {
    marginTop: screenHeight * 2,
    fontSize: 16,
    color: "green",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },
  bookingDetails: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 33,
  },
  textCoupon: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  textInput: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 17,
    marginTop: screenHeight * 2,
  },
  modalText: {
    marginTop: screenHeight * 2,
    textAlignVertical: "center",
    fontSize: 18,
  },

  totalText: {
    marginTop: screenHeight * 2,
    marginTop: screenHeight * 2,
    fontSize: 25,
    fontWeight: "bold",
  },
  right: {
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 2,
    fontSize: 18,
  },

  lessonPrice: {
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 5,
    fontSize: 18,
  },

  lessonPrice1: {
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 3,
    fontSize: 18,
  },
  total: {
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 15,
    fontSize: 20,
  },
  lessonSummary: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: screenHeight * -0.5,
    marginBottom: screenHeight,
  },
  price: {
    marginTop: screenHeight * 3,
    fontSize: 18,
    fontWeight: "bold",
  },
});
