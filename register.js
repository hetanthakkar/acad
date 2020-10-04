import * as React from "react";
import {
  Text,
  View,
  BackHandler,
  TouchableOpacity,
  Alert,
  Dimensions,
  Picker,
  TextInput,
} from "react-native";
import styles from "./skillstyle";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
import Constants from "expo-constants";
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
export default class Display1 extends React.Component {
  componentDidMount() {
    if (Constants.platform.web.ua.includes("Windows")) {
      this.setState({ width: screenWidth * 40 });
    } else {
      this.setState({ width: screenWidth * 60 });
    }
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      specifics: "",
      state: "",
      about: "",
      width: screenWidth * 60,
    };
  }
  handleBackButton = () => {
    this.props.navigation.navigate("Signup");
    return true;
  };

  updateSpecifics = (value) => {
    console.log("enters");
    this.setState({ specifics: value });
  };

  updateSkill = (skill) => {
    this.setState({ skill });
    this.setState({ specifics: "" });
    console.log(this.state.skill);
  };
  getCities = () => {
    if (this.state.skill === "")
      return ["Select Specific Skill"].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));

    if (this.state.skill === "Computer Language")
      return [
        "Enter Language",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "Python",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);
    if (this.state.skill === "New Language")
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

    if (this.state.skill === "Musical Instrument")
      return [
        "Enter Instrument",
        "Piano/Keyboard",
        "Drum",
        "FLute",
        "Guitar",
        "Sitar",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "Web Development")
      return [
        "Enter Technology",
        "Djamgo",
        "Flask",
        "Php",
        "Other",
      ].map((specifics) => <Picker.Item label={specifics} value={specifics} />);

    if (this.state.skill === "")
      return [" "].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));
    if (this.state.skill === "Other")
      return ["Enter Your SKill"].map((specifics) => (
        <Picker.Item label={specifics} value={specifics} />
      ));
  };

  handleValueChange = (value) => {
    this.setState({ state: value });
  };
  submit = () => {
    this.props.navigation.navigate("Info");
    if (this.state.skill == "") {
      Alert.alert(
        "Submit Error",
        "Please Fill The Form Correctly",
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
    } else if (this.state.about == "") {
      Alert.alert(
        "Submit Error",
        "About Can't Be Empty",
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
      this.props.addUser({ skill: this.state.skill });
      this.props.addUser({ specifics: this.state.specifics });
      this.props.addUser({ otherSkill: this.state.otherSkill });
      this.props.addUser({ about: this.state.about });

      this.props.navigation.navigate("Form");
    }
  };

  updateAbout = (value) => {
    this.setState({ about: value });
  };
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
  renderPicker = () => {
    if (
      !this.state.skill == "student" ||
      this.state.skill === "Web Development" ||
      this.state.skill === "Computer Language" ||
      this.state.skill === "New Language" ||
      this.state.skill === "Musical Instrument"
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
            width: this.state.width,
            marginVertical: 20,
            alignSelf: "center",
            color: "black",
            borderBottomWidth: 1.5,
            borderColor: "#D4E6F1",
            borderBottomColor: "black",
            backgroundColor: "#D4E6F1",
            paddingLeft: 210,
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
  renderOther = () => {
    if (this.state.skill === "Other" || this.state.specifics == "Other") {
      if (this.state.specifics == "Other") var value = "specifics";
      else var value = "skill";
      return (
        <View>
          <TextInput
            placeholder="Mention Here"
            onChangeText={(value) => {
              if (value == "skill") this.setState({ otherSkill: value });
              else this.setState({ specifics: value });
            }}
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 20,
              marginTop: screenHeight * 2,
              alignSelf: "center",
              width: this.state.width,
              height: screenHeight * 8,
              borderColor: "#0984e3",
              borderRadius: 7,
              borderWidth: 2,
              outlineWidth: 0,
              backgroundColor: "white",
            }}
          ></TextInput>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What Do You Want To Learn</Text>
        <Picker
          style={{
            height: 50,
            width: this.state.width,
            marginVertical: 20,
            alignSelf: "center",
            color: "black",
            borderBottomWidth: 1.5,
            borderColor: "#D4E6F1",
            borderBottomColor: "black",
            backgroundColor: "#D4E6F1",
            paddingLeft: 220,
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
            width: this.state.width,
            marginVertical: 12,
            alignSelf: "center",
            color: "black",
            borderBottomWidth: 1.5,
            borderColor: "#D4E6F1",
            borderBottomColor: "black",
            backgroundColor: "#D4E6F1",
            paddingLeft: 225,
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
            width: this.state.width,
            marginVertical: 20,
            alignSelf: "center",
            color: "black",
            borderBottomWidth: 1.5,
            borderColor: "#D4E6F1",
            borderBottomColor: "black",
            backgroundColor: "#D4E6F1",
            paddingLeft: 230,
          }}
          selectedValue={this.state.skill}
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
        {this.renderPicker()}
        {this.renderOther()}
        <TextInput
          onChangeText={this.updateAbout}
          placeholderTextColor="black"
          placeholder="Enter About Your self (Your Bio)"
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 20,
            marginTop: screenHeight * 2,
            alignSelf: "center",
            width: this.state.width,
            height: screenHeight * 15,
            borderColor: "#0984e3",
            borderRadius: 7,
            borderWidth: 2,
            outlineWidth: 0,
            backgroundColor: "white",
          }}
          maxLength={20}
        />

        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
