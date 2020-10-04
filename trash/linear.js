import React, { Component } from "react";
import RadioForm, { RadioButtonInput } from "react-native-simple-radio-button";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Button } from "./button/index";
import { addUser } from "./actions/index";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import styles from "./styles1/styles1";
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
const myFields = ({
  label,
  meta: { error, touched },
  input: { onChange, ...restInput },
}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
        placeholderTextColor="white"
        style={styles.field}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
const required = (value) => (value ? undefined : "Required");

var letters = /^[a-zA-Z ]{2,30}$/;
var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validate = (values) => {
  var errors = {};
  if (!letters.test(values.name)) {
    errors.name = "Please fill the proper name";
  }
  if (!values.name) {
    errors.name = "This name field cant be empty";
  }
  if (!mail.test(values.email)) {
    errors.email = "Enter valid email address";
  }
  if (!values.email) {
    errors.email = "This field cant be empty";
  }
  if (!values.password) {
    errors.password = "Enter the Password";
  }
  if (values.password != undefined && values.password.length < 5) {
    errors.password = "Password should atleast have 5 characters";
  }
  if (values.password !== values.cpassword) {
    errors.cpassword = "Password does not match";
  }
  // console.log(errors);
  return errors;
};

class Signup extends Component {
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
  handleValueChange = (value) => {
    this.setState({ state: value });
  };

  updatecity = async (value) => {
    await this.setState({ city: value });
  };

  submit = async (values) => {
    await this.props.addUser({ name: values.name });
    await this.props.addUser({ userName: values.userName });
    await this.props.addUser({ password: values.password });
    await this.props.addUser({ email: values.email });
    await this.props.addUser({ gender: this.state.gender });

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
        <View style={{ backgroundColor: "#F1EEFc" }}>
          <LinearGradient
            // colors={["#fc00ff", "#00dbde"]}
            colors={["#09C6F9", "#045DE9"]}
            // colors={["#B621FE", "#1FD1F9"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ height: screenHeight * 100 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 32,
                  fontWeight: "bold",
                  marginTop: 40,
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                Sign Up To Get Started
              </Text>
            </View>
            <View
              style={{
                flexDirection: this.state.what,
              }}
            >
              <Field
                name="name"
                component={myFields}
                label="Name "
                validate={[required]}
              />
              <Field
                name="userName"
                component={myFields}
                label="User_Name "
                validate={[required]}
              />
              <Field
                name="email"
                component={myFields}
                label="Email "
                validate={[required]}
              />
              <Field
                name="password"
                component={myFields}
                label="Password "
                validate={[required]}
              />
              <Field
                name="Repeat-Password"
                component={myFields}
                label="Repeat-Password "
                validate={[required]}
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
                    color: "white",
                    marginRight: screenWidth * 2,
                    textAlignVertical: "center",
                    alignSelf: "center",
                  }}
                >
                  Gender:
                </Text>
                <RadioForm
                  buttonColor={"white"}
                  buttonInnerColor={"white"}
                  buttonOuterColor={"white"}
                  style={styles.button}
                  buttonSize={12}
                  formHorizontal={true}
                  labelHorizontal={true}
                  radio_props={radio_props}
                  labelStyle={{
                    fontSize: 20,
                    color: "white",
                    justifyContent: "space-around",
                  }}
                  initial={-1}
                  onPress={(value) => {
                    this.setState({ gender: value });
                  }}
                ></RadioForm>
              </View>
              <Button
                style={styles.customButton}
                onPress={this.props.handleSubmit(this.submit)}
                text="SignUp"
                textStyle={styles.textStyle}
              ></Button>
            </View>
          </LinearGradient>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (value) => dispatch(addUser(value)),
  };
};
const ourform = reduxForm({
  form: "something",
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
  validate,
})(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(ourform);
