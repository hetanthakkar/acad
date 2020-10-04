import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Picker,
  TextInput,
  Dimensions,
} from "react-native";
import Icon from "./icons";
import { CheckBox } from "react-native-elements";
import LinearGradient from "expo-linear-gradient";

var disp = [];
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
export default class AddSkill extends Component {
  state = {
    count: 0,
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
  };
  updateSkill = (skill, element) => {
    if (element == 0) this.setState({ skill0: skill });
    if (element == 1) this.setState({ skill1: skill });
    if (element == 2) this.setState({ skill2: skill });
    if (element == 3) this.setState({ skill3: skill });
  };
  updatePrice = (price, element) => {
    if (element == 0) this.setState({ lesson0: price });
    if (element == 1) this.setState({ lesson1: price });
    if (element == 2) this.setState({ lesson2: price });
    if (element == 3) this.setState({ lesson3: price });
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
  renderLesson = (element) => {
    if (element == 0) return this.state.lesson0;
    if (element == 1) return this.state.lessson1;
    if (element == 2) return this.state.lessson2;
    if (element == 3) return this.state.lesson3;
  };
  renderSpecifics = (element) => {
    console.log("enterd specifics", element);
    if (element == 0) return this.state.specific0;
    if (element == 1) return this.state.specific1;
    if (element == 2) return this.state.specific2;
    if (element == 3) return this.state.specific3;
  };

  getSpecifics = (element) => {
    console.log("get cities", element);
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
    console.log("infosdf", element);
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
              //     height: 50,
              //     width: this.state.width,
              //     marginVertical: 20,
              //     alignSelf: "center",
              //     color: "black",
              //     borderRadius: 12,
              //     borderWidth: 2,
              //     borderColor: "#0984e3",
              //     backgroundColor: "white",

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
  price = (price, element) => {
    if (element == 0) this.setState({ price0: price });
    if (element == 1) this.setState({ price1: price });
    if (element == 2) this.setState({ price2: price });
    if (element == 3) this.setState({ price3: price });
  };
  renderify = () => {
    console.log(disp);
    return disp.map((element) => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: screenHeight * 2,
        }}
      >
        <Picker
          key={element}
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
          onValueChange={(price) => {
            this.updatePrice(price, element);
          }}
          mode="dialog"
          textStyle={{ color: "white" }}
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
          onChangeText={(value) => this.price(value, element)}
        ></TextInput>
        <TouchableOpacity
          key={10}
          style={{ marginTop: screenHeight * 2 }}
          onPress={(item) => {
            if (element == 0) {
              this.setState({ price0: 0 });
            }
            if (element == 1) {
              this.setState({ price1: 0 });
            }
            if (element == 2) {
              this.setState({ price2: 0 });
            }
            if (element == 3) {
              this.setState({ price3: 0 });
            }
            disp.splice(disp.indexOf(element), 1);
            this.setState({ count: this.state.count - 1 });
          }}
        >
          <Icon family="MaterialIcons" name="delete" size={25} color="black" />
        </TouchableOpacity>
      </View>
    ));
  };
  warn = () => {
    if (disp.length == 0) {
      return (
        <Text
          style={{
            color: "red",
            fontSize: 17,
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
  render() {
    return (
      <View style={{ backgroundColor: "#D4E6F1", height: "100%" }}>
        <View
          style={{
            width: "70%",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 22,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 32,
              fontWeight: "bold",
              marginVertical: screenHeight * 3,
            }}
          >
            Tell Us About Yourself
          </Text>
          <Text
            style={{
              marginHorizontal: screenWidth * 1,
              fontSize: 18,
              fontWeight: "500",
              marginVertical: screenHeight * 2,
            }}
          >
            1. Enter Your Preferred Teaching Time
          </Text>
          <CheckBox
            style={{
              marginHorizontal: screenWidth * 2,
              marginTop: screenHeight * -1,
            }}
            title="10:00 AM - 12:00 PM"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="2:00 PM - 6:00 PM"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="6:00 PM - 9:00 PM"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="Mid-Night / Early-Morning"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <Text
            style={{
              marginHorizontal: screenWidth * 1,
              fontSize: 18,
              fontWeight: "500",
              marginVertical: screenHeight * 2,
            }}
          >
            2. Enter Your Preferred Teaching Destination
          </Text>
          <CheckBox
            style={{
              marginHorizontal: screenWidth * 2,
              marginTop: screenHeight * -1,
            }}
            title="My House"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="Student's House"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <CheckBox
            title="Outside Place"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <View style={{ flexDirection: "row", backgroundColor: "white" }}>
            <Text
              style={{
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
              <Icon family="MaterialIcons" name="add" size={25} color="black" />
            </TouchableOpacity>
          </View>
          {this.warn()}
          {this.renderify()}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomePage")}
            style={{
              marginTop: screenHeight * 4,
              alignSelf: "center",
              backgroundColor: "#0984e3",
              borderRadius: 12,
              width: screenWidth * 20,
              height: screenHeight * 6,
              marginBottom: screenHeight * 2,
            }}
          >
            <Text
              style={{
                color: "#EAF0F1",
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
    );
  }
}
