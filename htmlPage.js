import React from "react";
import { Text, View, TextInput, Alert, Picker } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
import { Button } from "./button/index";
import styles from "./styles1/styles1";
import firebase from "firebase";
import LinearGradient from "expo-linear-gradient";
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var radio_props = [
  { label: "Male    ", value: "Male" },
  { label: "Female", value: "Female" },
];
var name = [];
var email = [];

var letters = /^[a-zA-Z ]{2,30}$/;
var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export default class myFormCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      value: "",
      what: "column",
    };
  }
  //   async componentDidMount() {
  //     await firebase
  //       .database()
  //       .ref("id/")
  //       .on("value", (snapshot) => {
  //         id = snapshot.val().number;
  //         this.setState({ id });
  //       });

  //     for (let k = 0; k < this.state.id; k++) {
  //       firebase
  //         .database()
  //         .ref("user/" + k)
  //         .on("value", (snapshot) => {
  //           fetch_email = snapshot.val().email;
  //           email.push(fetch_email);
  //         });
  //     }
  //   }
  getcityes = () => {
    if (this.state.state == "")
      return ["Enter City"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));

    if (this.state.state == "Gujarat")
      return [
        "Enter City",
        "Ahmedabad",
        "Anand",
        "Bhavnagar",
        "Gandhinagar",
        "Jamnagar",
        "Rajkot",
        "Surat",
        "Vadodara",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Maharashtra")
      return [
        "Enter City",
        "Akola",
        "Kalyan",
        "Mumbai",
        "Navi Mumbai",
        "Panvel",
        "Pune",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Chhattisgarh")
      return [
        "Enter City",
        "Raipur",
        "Bilaspur",
        "Bastar",
        "Jashpur",
        "Durg",
        "Koriya",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state === "Jharkhand")
      return [
        "Enter City",
        "Ranchi",
        "Bokaro",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "Ghatshila",
        "Hazaribagh",
        "Jamshedpur",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Kerala")
      return ["Enter City", "Kochi"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "Madhya Pradesh")
      return [
        "Enter City",
        "Bhopal",
        "Indore",
        "Gwalior",
        "Jabalpur",
        "Sagar",
        "Ujjain ",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Karnataka")
      return [
        "Enter City",
        "Mangalore",
        "Bangalore",
        "Mysore",
        "Bijapur",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Rajasthan")
      return [
        "Enter City",
        "Kota",
        "Udaipur",
        "Jaipur",
        "Jodhpur",
        "Sikar",
        "Ajmer",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Tamil Nadu")
      return [
        "Enter City",
        "Coimbatore",
        "Salem",
        "Madurai",
        "Tiruchirapalli",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Uttar Pradesh")
      return [
        "Enter City",
        "Kanpur",
        "Lucknow",
        "Ghaziabad",
        "Agra",
        "Varanasi",
        "Prayagraj",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Delhi")
      return ["Enter City", "Delhi NCR"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "")
      return <Picker.Item label="Enter City" value="" />;
  };

  updatecity = (value) => {
    this.setState({ city: value });
  };
  handleValueChange = (value) => {
    this.setState({ state: value });
  };

  submit = (values) => {
    if (email.indexOf(values.email) !== -1) {
      Alert.alert(
        "Email Error",
        "Email Already exists",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else if (this.state.gender == "") {
      Alert.alert(
        "Submit Error",
        "Select Gender",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else if (this.state.state == "") {
      Alert.alert(
        "Submit Error",
        "Select State",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else if (this.state.city == "") {
      Alert.alert(
        "Submit Error",
        "Select City",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      this.props.addUser({ name: values.name });
      this.props.addUser({ city: this.state.city });
      this.props.addUser({ email: values.email });
      this.props.addUser({ state: this.state.state });
      this.props.addUser({ gender: this.state.gender });
      this.props.addUser({ password: values.cpassword });

      this.props.navigation.navigate("Demo1");
    }
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.signup}>Sign Up To Get Started</Text>
        </View>
        <View
          style={{
            backgroundColor: "#D4E6F1",
            flexDirection: this.state.what,
          }}
        >
          <TextInput
            onChangeText={() => {
              console.log("ds");
            }}
            placeholder="Name"
            placeholderTextColor="#232B2B"
            style={styles.field}
          />
          <TextInput
            onChangeText={() => {
              console.log("ds");
            }}
            placeholder="User_Name"
            placeholderTextColor="#232B2B"
            style={styles.field}
          />
          <TextInput
            onChangeText={() => {
              console.log("ds");
            }}
            onFocus={() => {
              this.setState({
                backgroundColor: "#3742fa",
              });
            }}
            placeholder="Email"
            placeholderTextColor="#232B2B"
            style={styles.field}
          />

          <TextInput
            onChangeText={() => {
              console.log("ds");
            }}
            placeholder="Password"
            placeholderTextColor="#232B2B"
            style={styles.field}
          />
          <TextInput
            onChangeText={() => {
              console.log("ds");
            }}
            placeholder="Repeat-Password"
            placeholderTextColor="#232B2B"
            style={styles.field}
          />
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginVertical: 27,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginRight: screenWidth * 2,
                textAlignVertical: "center",
                alignSelf: "center",
              }}
            >
              Gender:
            </Text>
            <RadioForm
              style={styles.button}
              buttonSize={12}
              formHorizontal={true}
              labelHorizontal={true}
              radio_props={radio_props}
              labelStyle={{
                fontSize: 20,
                color: "black",
                justifyContent: "space-around",
              }}
              initial={-1}
              onPress={(value) => {
                this.setState({ gender: value });
              }}
            >
              <RadioButtonInput
                borderWidth={1}
                buttonInnerColor={"red"}
                buttonSize={20}
                buttonOuterSize={80}
                buttonStyle={{}}
                buttonWrapStyle={{
                  marginLeft: 10,
                }}
              />
            </RadioForm>
          </View>
          <Button
            style={styles.customButton}
            onPress={() => this.props.navigation.navigate("Register")}
            text="SignUp"
            textStyle={styles.textStyle}
          ></Button>
          <Text style={styles.mar}></Text>
        </View>
      </View>
    );
  }
}
