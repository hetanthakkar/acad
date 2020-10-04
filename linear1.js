import React, { Component } from "react";
import { CheckBox } from "react-native-elements";
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
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import Icon from "./icons";
var disp = [];
var value = [];
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
var newPassword, userName, email, user, password, city, state, uploadUrl, photo;
export default class AddSkill extends Component {
  state = {
    count: 0,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    skill0: "",
    skill1: "",
    skill2: "",
    skill3: "",
    specific0: "",
    specific1: "",
    specific2: "",
    specific3: "",
    price0: "",
    price1: "",
    price2: "",
    price3: "",
    lesson0: "",
    lesson1: "",
    lesson2: "",
    lesson3: "",
    timing: [],
    location: [],
  };

  updateSkill = (skill, element) => {
    if (element == 0) this.setState({ skill0: skill });
    if (element == 1) this.setState({ skill1: skill });
    if (element == 2) this.setState({ skill2: skill });
    if (element == 3) this.setState({ skill3: skill });
  };
  updateLesson = (lesson, element) => {
    if (element == 0) this.setState({ lesson0: lesson });
    if (element == 1) this.setState({ lesson1: lesson });
    if (element == 2) this.setState({ lesson2: lesson });
    if (element == 3) this.setState({ lesson3: lesson });
  };
  updateSpecifics = (specific, element) => {
    if (element == 0) this.setState({ specific0: specific });
    if (element == 1) this.setState({ specific1: specific });
    if (element == 2) this.setState({ specific2: specific });
    if (element == 3) this.setState({ specific3: specific });
  };
  renderSkill = (element) => {
    if (element == 0) return this.state.skill0;
    if (element == 1) return this.state.skill1;
    if (element == 2) return this.state.skill2;
    if (element == 3) return this.state.skill3;
  };

  renderPrice = (element) => {
    if (element == 0) return this.state.price0;
    if (element == 1) return this.state.price1;
    if (element == 2) return this.state.price2;
    if (element == 3) return this.state.price3;
  };
  renderLesson = (element) => {
    if (element == 0) return this.state.lesson0;
    if (element == 1) return this.state.lesson1;
    if (element == 2) return this.state.lesson2;
    if (element == 3) return this.state.lesson3;
  };

  renderSpecifics = (element) => {
    // console.log("enterd specifics", element);
    if (element == 0) return this.state.specific0;
    if (element == 1) return this.state.specific1;
    if (element == 2) return this.state.specific2;
    if (element == 3) return this.state.specific3;
  };

  getSpecifics = (element) => {
    // console.log("get cities", element);
    if (element == 0) {
      if (this.state.skill0 === "")
        return ["Select Specific Skill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill0 === "Computer Language")
        return [
          "Enter Language",
          "C",
          "C++",
          "Java",
          "JavaScript",
          "Python",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill0 === "New Language")
        return [
          "Enter Language",
          "English",
          "Spanish",
          "French",
          "Japanese",
          "Italian",
          "German",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill0 === "Musical Instrument")
        return [
          "Enter Instrument",
          "Piano/Keyboard",
          "Drum",
          "FLute",
          "Guitar",
          "Sitar",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill0 === "Web Development")
        return [
          "Enter Technology",
          "Djamgo",
          "Flask",
          "Php",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill0 === "")
        return [" "].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill0 === "Other")
        return ["Enter Your SKill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
    }
    if (element == 1) {
      if (this.state.skill1 === "")
        return ["Select Specific Skill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill1 === "Computer Language")
        return [
          "Enter Language",
          "C",
          "C++",
          "Java",
          "JavaScript",
          "Python",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill1 === "New Language")
        return [
          "Enter Language",
          "English",
          "Spanish",
          "French",
          "Japanese",
          "Italian",
          "German",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill1 === "Musical Instrument")
        return [
          "Enter Instrument",
          "Piano/Keyboard",
          "Drum",
          "FLute",
          "Guitar",
          "Sitar",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill1 === "Web Development")
        return [
          "Enter Technology",
          "Djamgo",
          "Flask",
          "Php",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill1 === "")
        return [" "].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill1 === "Other")
        return ["Enter Your SKill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
    }
    if (element == 2) {
      console.log("element is 2");
      if (this.state.skill2 === "")
        return ["Select Specific Skill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill2 === "Computer Language")
        return [
          "Enter Language",
          "C",
          "C++",
          "Java",
          "JavaScript",
          "Python",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill2 === "New Language")
        return [
          "Enter Language",
          "English",
          "Spanish",
          "French",
          "Japanese",
          "Italian",
          "German",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill2 === "Musical Instrument")
        return [
          "Enter Instrument",
          "Piano/Keyboard",
          "Drum",
          "FLute",
          "Guitar",
          "Sitar",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill2 === "Web Development")
        return [
          "Enter Technology",
          "Djamgo",
          "Flask",
          "Php",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill2 === "")
        return [" "].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill2 === "Other")
        return ["Enter Your SKill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
    }
    if (element == 3) {
      if (this.state.skill3 === "")
        return ["Select Specific Skill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill3 === "Computer Language")
        return [
          "Enter Language",
          "C",
          "C++",
          "Java",
          "JavaScript",
          "Python",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill3 === "New Language")
        return [
          "Enter Language",
          "English",
          "Spanish",
          "French",
          "Japanese",
          "Italian",
          "German",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill3 === "Musical Instrument")
        return [
          "Enter Instrument",
          "Piano/Keyboard",
          "Drum",
          "FLute",
          "Guitar",
          "Sitar",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill3 === "Web Development")
        return [
          "Enter Technology",
          "Djamgo",
          "Flask",
          "Php",
          "Other",
        ].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));

      if (this.state.skill3 === "")
        return [" "].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
      if (this.state.skill3 === "Other")
        return ["Enter Your SKill"].map((specifics) => (
          <Picker.Item label={specifics} value={specifics} />
        ));
    }
  };

  renderPicker = (element) => {
    if (element == 0) {
      if (
        this.state.skill0 == "student" ||
        this.state.skill0 === "Web Development" ||
        this.state.skill0 === "Computer Language" ||
        this.state.skill0 === "New Language" ||
        this.state.skill0 === "Musical Instrument"
      ) {
        return (
          <Picker
            style={{
              height: 50,
              marginTop: screenHeight * 2,
              width: screenWidth * 15,
              alignSelf: "center",
              color: "black",
              borderRadius: 12,
              borderColor: "black",
              backgroundColor: "#F5F5F5",
              paddingLeft: 20,
            }}
            onValueChange={(specific) =>
              this.updateSpecifics(specific, element)
            }
            selectedValue={this.renderSpecifics(element)}
            textStyle={{ width: screenWidth * 100, color: "white" }}
            mode="dialog"
          >
            {this.getSpecifics(element)}
          </Picker>
        );
      }
    }
    if (element == 1) {
      if (
        this.state.skill1 == "student" ||
        this.state.skill1 === "Web Development" ||
        this.state.skill1 === "Computer Language" ||
        this.state.skill1 === "New Language" ||
        this.state.skill1 === "Musical Instrument"
      ) {
        return (
          <Picker
            style={{
              height: 50,
              width: screenWidth * 15,
              alignSelf: "center",
              color: "black",
              borderRadius: 12,
              borderColor: "black",
              backgroundColor: "#F5F5F5",
              paddingLeft: 20,
            }}
            onValueChange={(specific) =>
              this.updateSpecifics(specific, element)
            }
            selectedValue={this.renderSpecifics(element)}
            textStyle={{ width: screenWidth * 100, color: "white" }}
            mode="dialog"
          >
            {this.getSpecifics(element)}
          </Picker>
        );
      }
    }
    if (element == 2) {
      if (
        this.state.skill2 == "student" ||
        this.state.skill2 === "Web Development" ||
        this.state.skill2 === "Computer Language" ||
        this.state.skill2 === "New Language" ||
        this.state.skill2 === "Musical Instrument"
      ) {
        return (
          <Picker
            style={{
              height: 50,
              marginTop: screenHeight * 2,
              width: screenWidth * 15,
              alignSelf: "center",
              color: "black",
              borderRadius: 12,
              borderColor: "black",
              backgroundColor: "#F5F5F5",
              paddingLeft: 20,
            }}
            onValueChange={(specific) =>
              this.updateSpecifics(specific, element)
            }
            selectedValue={this.renderSpecifics(element)}
            textStyle={{ width: screenWidth * 100, color: "white" }}
            mode="dialog"
          >
            {this.getSpecifics(element)}
          </Picker>
        );
      }
    }
    if (element == 3) {
      if (
        this.state.skill3 == "student" ||
        this.state.skill3 === "Web Development" ||
        this.state.skill3 === "Computer Language" ||
        this.state.skill3 === "New Language" ||
        this.state.skill3 === "Musical Instrument"
      ) {
        return (
          <Picker
            style={{
              height: 50,
              marginTop: screenHeight * 2,
              width: screenWidth * 15,
              alignSelf: "center",
              color: "black",
              borderRadius: 12,
              borderColor: "black",
              backgroundColor: "#F5F5F5",
              paddingLeft: 20,
            }}
            onValueChange={(specific) =>
              this.updateSpecifics(specific, element)
            }
            selectedValue={this.renderSpecifics(element)}
            textStyle={{ width: screenWidth * 100, color: "white" }}
            mode="dialog"
          >
            {this.getSpecifics(element)}
          </Picker>
        );
      }
    }
  };

  updatePrice = (specific, element) => {
    if (element == 0) this.setState({ price0: specific });
    if (element == 1) this.setState({ price1: specific });
    if (element == 2) this.setState({ price2: specific });
    if (element == 3) this.setState({ price3: specific });
  };
  renderify = () => {
    return disp.map((element) => (
      // <View
      //   style={{
      //     backgroundColor: "#0984e3",
      //     borderRadius: 15,
      //     flexDirection: "row",
      //     justifyContent: "space-around",
      //     marginVertical: screenHeight * 2,
      //   }}
      // >
      <LinearGradient
        colors={["#09C6F9", "#045DE9"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flex: 1,
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: screenHeight * 2,
        }}
      >
        <Picker
          // key={element}
          style={{
            height: 50,
            width: screenWidth * 15,
            alignSelf: "center",
            color: "black",
            borderRadius: 12,
            borderColor: "black",
            backgroundColor: "#F5F5F5",
            paddingLeft: 20,
          }}
          selectedValue={this.renderSkill(element)}
          onValueChange={(skill) => {
            console.log(element);
            this.updateSkill(skill, element);
          }}
          textStyle={{ width: screenWidth * 100, color: "white" }}
          mode="dialog"
        >
          <Picker.Item label="Select Skill: " value="" />
          <Picker.Item label="No Skill" value="student" />
          <Picker.Item label="Photography" value="Photography" />
          <Picker.Item label="Videography" value="Videography" />
          <Picker.Item label="Photoshop" value="Photoshop" />
          <Picker.Item label="Animation" value="Animation" />
          <Picker.Item label="Digital Marketing" value="Digital Marketing" />
          <Picker.Item label="Buisness" value="Buisness" />
          <Picker.Item label="Musical Instrument" value="Musical Instrument" />
          <Picker.Item label="Cooking" value="Cooking" />
          <Picker.Item label="Singing" value="Singing" />
          <Picker.Item label="Drawing" value="Drawing" />
          <Picker.Item label="New Language" value="New Language" />
          <Picker.Item label="Computer Language" value="Computer Language" />
          <Picker.Item label="Cyber Security" value="Cyber Security" />
          <Picker.Item
            label="Artificial Intelligence"
            value="Artificial Intelligence"
          />
          <Picker.Item label="Machine Learning" value="Machine Learning" />
          <Picker.Item label="School Subjects" value="School Subjects" />
          <Picker.Item label="Psychology" value="Psychology" />
          <Picker.Item label=" Web Development" value="Web Development" />
          <Picker.Item label="Mobile Development" value="Mobile Development" />
          <Picker.Item label="Game Development" value="Game Development" />
          <Picker.Item label="Graphic Designing " value="Graphic Designing" />
          <Picker.Item label="Interior Designing " value="Interior Designing" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        {this.renderPicker(element)}
        <Picker
          // key={element}
          style={{
            height: 50,
            width: screenWidth * 15,
            alignSelf: "center",
            color: "black",
            borderRadius: 12,
            borderColor: "black",
            backgroundColor: "#F5F5F5",
            paddingLeft: 20,
          }}
          selectedValue={this.renderLesson(element)}
          onValueChange={(skill) => {
            console.log(element);
            this.updateLesson(skill, element);
          }}
          textStyle={{ width: screenWidth * 100, color: "white" }}
          mode="dialog"
        >
          <Picker.Item label="# Lessons In The Course" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
        </Picker>

        <TextInput
          value={this.renderPrice(element)}
          placeholderTextColor="black"
          style={{
            backgroundColor: "#F5F5F5",
            outlineWidth: 0,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 12,
            padding: 10,
          }}
          placeholder="Price / Lesson"
          onChangeText={(value) => this.updatePrice(value, element)}
        ></TextInput>
        <TouchableOpacity
          key={10}
          style={{ marginTop: screenHeight * 2 }}
          onPress={async (item) => {
            if (element == 0) {
              console.log("element is 0");
              await this.setState({ price0: "" });
              await this.setState({ skill0: "" });
              await this.setState({ lesson0: "" });
              await this.setState({ specific0: "" });
            }
            if (element == 1) {
              console.log("element is 1");
              await this.setState({ price1: "" });
              await this.setState({ skill1: "" });
              await this.setState({ lesson1: "" });
              await this.setState({ specific1: "" });
            }
            if (element == 2) {
              await this.setState({ price2: "" });
              await this.setState({ skill2: "" });
              await this.setState({ lesson2: "" });
              await this.setState({ specific2: "" });
            }
            if (element == 3) {
              await this.setState({ price3: "" });
              await this.setState({ skill3: "" });
              await this.setState({ lesson3: "" });
              await this.setState({ specific3: "" });
            }
            disp.splice(disp.indexOf(element), 1);
            await this.setState({ count: this.state.count - 1 });
            console.log(
              "final state is",
              element,
              element,
              this.state.lesson0,
              this.state.price0,
              "dsf",
              this.state.lesson1,
              this.state.price1
            );
          }}
        >
          <Icon family="MaterialIcons" name="delete" size={25} color="black" />
        </TouchableOpacity>
      </LinearGradient>
      // </View>
    ));
  };
  warn = () => {
    if (disp.length == 0) {
      return (
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlignVertical: "true",
            marginLeft: screenWidth * 2,
            marginTop: screenHeight * 3,
          }}
        >
          You Must add atleast 1 Skill !
        </Text>
      );
    }
  };
  check1 = async () => {
    await this.setState({ checked1: !this.state.checked1 });
    if (this.state.checked1) {
      await this.setState({
        timing: [...this.state.timing, "10:00 AM - 12:00 PM"],
      });
    } else {
      let time = this.state.timing;
      time.splice(time.indexOf("10:00 AM - 12:00 PM"), 1);
      await this.setState({
        timing: time,
      });
    }
    console.log(this.state.timing);
  };
  check2 = async () => {
    await this.setState({ checked2: !this.state.checked2 });
    if (this.state.checked2) {
      await this.setState({
        timing: [...this.state.timing, "2:00 PM - 6:00 PM"],
      });
    } else {
      let time = this.state.timing;
      time.splice(time.indexOf("2:00 PM - 6:00 PM"), 1);
      await this.setState({
        timing: time,
      });
      console.log(this.state.timing);
    }
  };
  check3 = async () => {
    await this.setState({ checked3: !this.state.checked3 });
    if (this.state.checked3) {
      await this.setState({
        timing: [...this.state.timing, "6:00 AM - 9:00 PM"],
      });
    } else {
      let time = this.state.timing;
      time.splice(time.indexOf("10:00 AM - 12:00 PM"), 1);
      await this.setState({
        timing: time,
      });
    }
    console.log(this.state.timing);
  };
  check4 = async () => {
    await this.setState({ checked4: !this.state.checked4 });
    if (this.state.checked1) {
      await this.setState({
        timing: [...this.state.timing, "Mid-Night / Early-Morning"],
      });
    } else {
      let time = this.state.timing;
      time.splice(time.indexOf("10:00 AM - 12:00 PM"), 1);
      await this.setState({
        timing: time,
      });
    }
    console.log(this.state.timing);
  };
  check5 = async () => {
    await this.setState({ checked5: !this.state.checked5 });
    if (this.state.checked5) {
      await this.setState({
        location: [...this.state.location, "My House"],
      });
    } else {
      let location = this.state.timing;
      location.splice(location.indexOf("My House"), 1);
      await this.setState({
        location,
      });
    }
    console.log(this.state.location);
  };
  check6 = async () => {
    await this.setState({ checked6: !this.state.checked6 });
    if (this.state.checked6) {
      await this.setState({
        location: [...this.state.location, "Student's House"],
      });
    } else {
      let location = this.state.location;
      location.splice(location.indexOf("Student's House"), 1);
      await this.setState({
        location,
      });
    }
    console.log(this.state.location);
  };
  check7 = async () => {
    await this.setState({ checked7: !this.state.checked7 });
    if (this.state.checked7) {
      await this.setState({
        location: [...this.state.location, "Outside Place"],
      });
    } else {
      let location = this.state.location;
      location.splice(location.indexOf("Outside Place"), 1);
      await this.setState({
        location,
      });
    }
    console.log(this.state.location);
  };
  render() {
    if (true) {
      return (
        <View style={{ backgroundColor: "#F1EEFc", height: "100%" }}>
          <LinearGradient
            colors={["#09C6F9", "#045DE9"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
          >
            <View style={{ height: "100%" }}>
              <View
                style={{
                  width: "70%",
                  alignSelf: "center",
                  borderRadius: 22,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "white",
                    marginVertical: screenHeight * 3,
                  }}
                >
                  Tell Us About Yourself
                </Text>
                <Text
                  style={{
                    color: "white",
                    marginHorizontal: screenWidth * 1,
                    fontSize: 18,
                    fontWeight: "500",
                    marginVertical: screenHeight * 2,
                  }}
                >
                  1. Enter Your Preferred Teaching Time
                </Text>
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  style={{
                    backgroundColor: "red",
                    marginHorizontal: screenWidth * 2,
                    marginTop: screenHeight * -1,
                  }}
                  title="10:00 AM - 12:00 PM"
                  checked={this.state.checked1}
                  onPress={this.check1}
                />
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  title="2:00 PM - 6:00 PM"
                  checked={this.state.checked2}
                  onPress={this.check2}
                />
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  title="6:00 PM - 9:00 PM"
                  checked={this.state.checked3}
                  onPress={this.check3}
                />
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  title="Mid-Night / Early-Morning"
                  checked={this.state.checked4}
                  onPress={this.check4}
                />
                <Text
                  style={{
                    color: "white",
                    marginHorizontal: screenWidth * 1,
                    fontSize: 18,
                    fontWeight: "500",
                    marginVertical: screenHeight * 2,
                  }}
                >
                  2. Enter Your Preferred Teaching Destination
                </Text>
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  style={{
                    marginHorizontal: screenWidth * 2,
                    marginTop: screenHeight * -1,
                  }}
                  title="My House"
                  checked={this.state.checked5}
                  onPress={this.check5}
                />
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  title="Student's House"
                  checked={this.state.checked6}
                  onPress={this.check6}
                />
                <CheckBox
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 22,
                  }}
                  title="Outside Place"
                  checked={this.state.checked7}
                  onPress={this.check7}
                />
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "white",
                      marginHorizontal: screenWidth * 1,
                      fontSize: 18,
                      marginTop: screenHeight * 2,
                    }}
                  >
                    3. Add Skills
                  </Text>

                  <TouchableOpacity
                    style={{ marginTop: screenHeight * 2 }}
                    onPress={() => {
                      if (this.state.count <= 3) {
                        this.setState({ count: this.state.count + 1 });
                        disp.push(this.state.count);
                      } else {
                        console.log("Fuck off");
                      }
                    }}
                  >
                    <Icon
                      family="MaterialIcons"
                      name="add"
                      size={25}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
                {this.warn()}
                {this.renderify()}

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Home");
                  }}
                  style={{
                    marginTop: screenHeight * 4,
                    alignSelf: "center",
                    backgroundColor: "white",
                    borderRadius: 12,
                    width: screenWidth * 20,
                    height: screenHeight * 6,
                    marginBottom: screenHeight * 2,
                  }}
                >
                  <Text
                    style={{
                      color: "#0984e3",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 25,
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
