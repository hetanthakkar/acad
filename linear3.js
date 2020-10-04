import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as Linking from "expo-linking";

import RadioForm, { RadioButtonInput } from "react-native-simple-radio-button";
import { addUser } from "./actions/index";
import {
  View,
  Text,
  Picker,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import styles from "./styles1/styles1";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

var radio_props = [
  { label: "Yes    ", value: "Yes" },
  { label: "No", value: "No" },
];
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
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
        placeholderTextColor="black"
        placeholder="Enter About Your self (Your Bio)"
        style={{
          color: "black",
          textAlign: "center",
          fontSize: 20,
          marginTop: screenHeight * 2,
          alignSelf: "center",
          width: screenWidth * 30,
          height: screenHeight * 15,
          borderColor: "#0984e3",
          borderRadius: 12,
          borderWidth: 2,
          outlineWidth: 0,
          backgroundColor: "white",
        }}
        maxLength={20}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
const myFields1 = ({
  label,
  meta: { error, touched },
  input: { onChange, ...restInput },
}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChange}
        {...restInput}
        placeholderTextColor="black"
        placeholder="Mention Other Skill"
        style={{
          color: "black",
          textAlign: "center",
          fontSize: 20,
          marginTop: screenHeight * 2,
          alignSelf: "center",
          width: screenWidth * 20,
          height: screenHeight * 10,
          borderColor: "#0984e3",
          borderRadius: 12,
          borderWidth: 2,
          outlineWidth: 0,
          backgroundColor: "white",
        }}
        maxLength={20}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const required = (value) => (value ? undefined : "Required");

class Register extends Component {
  state = {
    skill: "",
    specifics: "",
    state: "",
    about: "",
    width: screenWidth * 60,
  };
  componentDidMount() {
    console.log(this.props.user);
  }
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
  getCities = () => {
    if (this.state.skill === "")
      return ["Select Specific Skill"].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));
  };
  renderPicker = () => {
    if (
      !this.state.learnSkill == "student" ||
      this.state.learnSkill === "Web Development" ||
      this.state.learnSkill === "Computer Language" ||
      this.state.learnSkill === "New Language" ||
      this.state.learnSkill === "Musical Instrument"
    ) {
      return (
        <Picker
          style={{
            height: 50,
            width: "40%",
            marginVertical: 20,
            alignSelf: "center",
            color: "black",
            borderRadius: 12,
            borderBottomWidth: 2,
            borderColor: "#0984e3",
            backgroundColor: "white",
            paddingLeft: 130,
          }}
          onValueChange={(itemValue) => this.updateSpecifics(itemValue)}
          selectedValue={this.state.specifics}
          textStyle={{ width: screenWidth * 100, color: "white" }}
          mode="dialog"
        >
          {this.getCities()}
        </Picker>
      );
    }
  };
  getCities = () => {
    if (this.state.learnSkill === "")
      return ["Select Specific Skill"].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));

    if (this.state.learnSkill === "Computer Language")
      return [
        "Enter Language",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "Python",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);
    if (this.state.learnSkill === "New Language")
      return [
        "Enter Language",
        "English",
        "Spanish",
        "French",
        "Japanese",
        "Italian",
        "German",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.learnSkill === "Musical Instrument")
      return [
        "Enter Instrument",
        "Piano/Keyboard",
        "Drum",
        "FLute",
        "Guitar",
        "Sitar",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.learnSkill === "Web Development")
      return [
        "Enter Technology",
        "Djamgo",
        "Flask",
        "Php",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.learnSkill === "Other")
      return ["Enter Your SKill"].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));
  };
  updatecity = async (value) => {
    await this.setState({ city: value });
  };

  updateSpecifics = (value) => {
    console.log("enters");
    this.setState({ specifics: value });
  };
  submit = async (values) => {
    console.log(this.props.user);
    // await this.props.addUser({ state: this.state.state });
    // await this.props.addUser({ city: this.state.city });
    // await this.props.addUser({ learnSkill: this.state.learnSkill });
    // await this.props.addUser({ specifics: this.state.specifics });
    // await this.props.addUser({ teacher: this.state.teacher });
    // if (this.state.skill == "other")
    //   await this.props.addUser({ skill: values.other });
    // if (this.state.specifics == "other")
    //   await this.props.addUser({ otherSpecifics: value.other });
    // console.log(this.props.user);
    Linking.openURL("https://expo.io");
    // this.props.navigation.navigate("https://www.youtube.com/");
  };
  updateSkill = async (learnSkill) => {
    await this.setState({ learnSkill });
    console.log(this.state.learnSkill);
  };
  handleValueChange = (value) => {
    this.setState({ state: value });
  };
  renderOther = () => {
    if (this.state.specifics == "Other" || this.state.learnSkill == "Other") {
      return (
        <Field
          name="other"
          component={myFields1}
          label="Bio "
          validate={[required]}
        />
      );
    }
  };
  render() {
    if (true) {
      return (
        <View
          style={{
            backgroundColor: "#F1EEFc",
            height: "100%",
          }}
        >
          <LinearGradient
            colors={["#09C6F9", "#045DE9"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
          >
            <View style={{ height: "100%" }}>
              <View
                style={{
                  flex: 1,
                  width: "55%",
                  alignSelf: "center",
                  borderRadius: 22,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 37,
                    fontWeight: "bold",
                    color: "white",
                    marginVertical: screenHeight * 2,
                  }}
                >
                  What Do You Want To Learn
                </Text>
                <Picker
                  style={{
                    height: 50,
                    width: "40%",
                    marginVertical: 20,
                    marginTop: screenHeight * 6,
                    alignSelf: "center",
                    color: "black",
                    borderRadius: 12,
                    borderBottomWidth: 2,
                    borderColor: "#0984e3",
                    backgroundColor: "white",
                    paddingLeft: 130,
                  }}
                  selectedValue={this.state.state}
                  onValueChange={this.handleValueChange}
                  mode="dialog"
                  textStyle={styles.pickerText}
                >
                  <Picker.Item label="Enter State" value="" />
                  <Picker.Item label="Delhi" value="Delhi" />
                  <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
                  <Picker.Item label="Goa" value="Goa" />
                  <Picker.Item label="Gujarat" value="Gujarat" />
                  <Picker.Item label="Haryana" value="Haryana" />
                  <Picker.Item label="Jharkhand" value="Jharkhand" />
                  <Picker.Item label="Karnataka" value="Karnataka" />
                  <Picker.Item label="Kerala" value="Kerala" />
                  <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
                  <Picker.Item label="Maharashtra" value="Maharashtra" />
                  <Picker.Item label="Punjab" value="Punjab" />
                  <Picker.Item label="Rajasthan" value="Rajasthan" />
                  <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
                  <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
                </Picker>
                <Picker
                  style={{
                    height: 50,
                    width: "40%",
                    marginVertical: 20,
                    alignSelf: "center",
                    color: "black",
                    borderRadius: 12,
                    borderBottomWidth: 2,
                    borderColor: "#0984e3",
                    backgroundColor: "white",
                    paddingLeft: 130,
                  }}
                  onValueChange={(itemValue) => this.updatecity(itemValue)}
                  selectedValue={this.state.city}
                  mode="dialog"
                  textStyle={styles.pickerText}
                >
                  {this.getcityes()}
                </Picker>
                <Picker
                  style={{
                    height: 50,
                    width: "40%",
                    marginVertical: 20,
                    alignSelf: "center",
                    color: "black",
                    borderRadius: 12,
                    borderBottomWidth: 2,
                    borderColor: "#0984e3",
                    backgroundColor: "white",
                    paddingLeft: 130,
                  }}
                  selectedValue={this.state.learnSkill}
                  onValueChange={this.updateSkill}
                  textStyle={{ width: screenWidth * 100, color: "white" }}
                  mode="dialog"
                >
                  <Picker.Item label="Select Skill: " value="" />
                  <Picker.Item label="No Skill" value="student" />
                  <Picker.Item label="Photography" value="Photography" />
                  <Picker.Item label="Videography" value="Videography" />
                  <Picker.Item label="Photoshop" value="Photoshop" />
                  <Picker.Item label="Animation" value="Animation" />
                  <Picker.Item
                    label="Digital Marketing"
                    value="Digital Marketing"
                  />
                  <Picker.Item label="Buisness" value="Buisness" />
                  <Picker.Item
                    label="Musical Instrument"
                    value="Musical Instrument"
                  />
                  <Picker.Item label="Cooking" value="Cooking" />
                  <Picker.Item label="Singing" value="Singing" />
                  <Picker.Item label="Drawing" value="Drawing" />
                  <Picker.Item label="New Language" value="New Language" />
                  <Picker.Item
                    label="Computer Language"
                    value="Computer Language"
                  />
                  <Picker.Item label="Cyber Security" value="Cyber Security" />
                  <Picker.Item
                    label="Artificial Intelligence"
                    value="Artificial Intelligence"
                  />
                  <Picker.Item
                    label="Machine Learning"
                    value="Machine Learning"
                  />
                  <Picker.Item
                    label="School Subjects"
                    value="School Subjects"
                  />
                  <Picker.Item label="Psychology" value="Psychology" />
                  <Picker.Item
                    label=" Web Development"
                    value="Web Development"
                  />
                  <Picker.Item
                    label="Mobile Development"
                    value="Mobile Development"
                  />
                  <Picker.Item
                    label="Game Development"
                    value="Game Development"
                  />
                  <Picker.Item
                    label="Graphic Designing "
                    value="Graphic Designing"
                  />
                  <Picker.Item
                    label="Interior Designing "
                    value="Interior Designing"
                  />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
                <View style={{ marginVertical: 20 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: "white",
                      marginRight: screenWidth * 2,
                      textAlignVertical: "center",
                      marginBottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    Would you like to teach?
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
                      this.setState({ teacher: value });
                    }}
                  ></RadioForm>
                </View>
                {this.renderPicker()}
                {this.renderOther()}
                <Field
                  name="bio"
                  component={myFields}
                  label="other "
                  validate={[required]}
                />

                <TouchableOpacity
                  onPress={this.props.handleSubmit(this.submit)}
                  style={{
                    marginTop: screenHeight * 8,
                    alignSelf: "center",
                    backgroundColor: "white",
                    borderRadius: 12,
                    width: screenWidth * 23,
                    height: screenHeight * 8,
                    marginBottom: screenHeight * 2,
                  }}
                >
                  <Text
                    style={{
                      color: "#0984e3",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 32,
                      textAlignVertical: "center",
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
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
})(Register);

export default connect(mapStateToProps, mapDispatchToProps)(ourform);
