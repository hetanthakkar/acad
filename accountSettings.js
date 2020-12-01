import React, { Component } from "react";
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
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import Icon from "./icons";
import Modal from "react-native-modal";
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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var newPassword, userName, email, user, password, city, state, uploadUrl, photo;
export default class AccountEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      edit: false,
      state: "Enter State",
      city: "",
      name: "Hetan Thakkar",
      email: "hetanthakkar1@gmail.com",
      password: "523212",
      userName: "Hetan",
      state1: "Gujarat",
      city1: "Bhavnagar",
      loading: false,
      visible: false,
      multiply: 7,
      width1: screenWidth * 27,
      orientation: "row",
      width3: screenWidth * -71,
      width: screenWidth * 60,
      width2: screenWidth * 13,
      width4: screenWidth * 15,
      bio:
        "Hetan started her career in software development as a contractor helping small businesses develop their apps. She is currently a software developer at Rangle.io in Toronto focussed on building web applications for clients using modern JavaScript",
      image:
        "https://drive.google.com/file/d/17ueAQQ5uVWX7lZ8YQ5pguzTmxOam-YXb/view?usp=sharing",
    };
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
  //   async componentDidMount() {
  //     await firebase
  //       .database()
  //       .ref("user/" + this.props.user.id + "/name")
  //       .on("value", async (snapshot) => {
  //         userName = snapshot.val();
  //         await this.setState({ userName });
  //       });
  //     await firebase
  //       .database()
  //       .ref("user/" + this.props.user.id + "/email")
  //       .on("value", async (snapshot) => {
  //         email = snapshot.val();
  //         await this.setState({ email });
  //       });
  //     await firebase
  //       .database()
  //       .ref("user/" + this.props.user.id + "/password")
  //       .on("value", async (snapshot) => {
  //         password = snapshot.val();
  //         await this.setState({ password });
  //       });

  //     await firebase
  //       .database()
  //       .ref("user/" + this.props.user.id + "/city")
  //       .on("value", async (snapshot) => {
  //         city = snapshot.val();
  //         await this.setState({ city });
  //       });

  //     await firebase
  //       .database()
  //       .ref("user/" + this.props.user.id + "/state")
  //       .on("value", async (snapshot) => {
  //         state = snapshot.val();
  //         await this.setState({ state });
  //       });
  //     await firebase
  //       .database()
  //       .ref("user/" + this.props.user.id + "/photo")
  //       .on("value", async (snapshot) => {
  //         image = snapshot.val();
  //         await this.setState({ image });
  //       });

  //     user = firebase.auth().currentUser;
  //     BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  //     await this.loadFonts();
  //     this.setState({ fontsLoaded: true });
  //   }
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

  pickImage = async () => {
    console.log("slfnsdfnm");
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(pickerResult);
    await this.setState({ loading: true });
    await this._handleImagePicked(pickerResult);
  };
  takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    await this.setState({ loading: true });
    await this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });
      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        await this.setState({ image: uploadUrl });
        await firebase
          .database()
          .ref("user/" + this.props.user.id)
          .update({
            photo: this.state.image,
          });
        await this.setState({ loading: false });
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };
  change = async () => {
    if (!this.state.edit) {
      this.setState({ edit: true });
    } else {
      await firebase
        .database()
        .ref("user/" + 1)
        .update({
          name: "Hetan Thakkar",
        });
      newPassword = "523212";
      user
        .updatePassword(newPassword)
        .then(function() {
          user
            .updateEmail("user@gmail.com")
            .then(async () => {
              await firebase
                .database()
                .ref("user/" + 1)
                .update({
                  email: "user@gmail.com",
                });
              await firebase
                .database()
                .ref("user/" + 1)
                .update({
                  password: "523212",
                });
            })
            .catch(function(error) {
              console.log(error);
            });
          console.log("success");
        })
        .catch(function(error) {
          console.log(error);
        });
      await firebase
        .database()
        .ref("user/" + 1)
        .update({
          state: this.state.state1,
          city: this.state.city1,
        });

      console.log(firebase.auth().currentUser);
    }
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
    if (this.state.state == "Enter State")
      return ["Enter City"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
  };

  renderLoading = () => {
    if (this.state.loading) return <ActivityIndicator size="large" />;
  };
  render() {
    if (true) {
      return (
        <View style={{ backgroundColor: "#F1EEFc" }}>
          <LinearGradient
            colors={["#09C6F9", "#045DE9"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.BGsty}
          >
            <View style={styles.userinfoContainer}>
              <TouchableOpacity onPress={() => this.handleBackButton()}>
                <Icon
                  family="MaterialIcons"
                  name="arrow-back"
                  size={25}
                  color="#FFF"
                />
              </TouchableOpacity>
              <Text style={styles.userinfotxt}>Account </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({ visible: true })}
              style={{}}
            >
              <View style={styles.imgContainer}>
                <View style={styles.imgUser}>
                  <Image
                    style={styles.imgwidhei}
                    source={{
                      uri:
                        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-p0e6vdt9b56e6tj9aiqsf1ki25-20181028233045.Medi.jpeg",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: screenHeight * 2 }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Change Your Profile Picture
              </Text>
              <View
                style={{
                  marginTop: screenHeight * 3,
                  marginBottom: screenHeight * 2,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  onPress={() => this.pickImage()}
                  style={{ marginLeft: screenWidth * -2 }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.pickImage()}
                  style={{ marginLeft: screenWidth * 6 }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Gallery</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          <View
            style={{
              backgroundColor: "#F1EEFc",
              flexDirection: this.state.orientation,
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ marginLeft: screenWidth * this.state.multiply }}>
              <Text style={styles.txtsty}>Mail_Id </Text>
              <TextInput
                value={this.state.email}
                editable={this.state.edit}
                style={styles.inputtxtsty}
                keyboardType="email-address"
              />
              <Text style={styles.txtsty}>Name </Text>
              <TextInput
                value={this.state.name}
                editable={this.state.edit}
                style={styles.inputtxtsty}
                keyboardType="email-address"
              />
              <Text style={styles.txtsty}>State </Text>
              <TextInput
                value={this.state.state1}
                editable={this.state.edit}
                style={styles.inputtxtsty}
                keyboardType="email-address"
              />
              <Picker
                style={{
                  height: 30,
                  marginLeft: this.state.width3,
                  width: this.state.width2,
                  alignSelf: "center",
                  color: "black",
                  borderRadius: 5,
                  marginVertical: 10,
                  marginTop: screenHeight * 2,
                  backgroundColor: "#F1EEFc",
                }}
                selectedValue={this.state.state}
                onValueChange={this.handleValueChange}
                mode="dialog"
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
            </View>
            <View
              style={{
                backgroundColor: "#F1EEFc",
                marginLeft: screenWidth * this.state.multiply,
              }}
            >
              <Text style={styles.txtsty}>Password </Text>
              <TextInput
                value={this.state.password}
                editable={this.state.edit}
                secureTextEntry={true}
                style={styles.inputtxtsty}
                keyboardType="email-address"
              />
              <Text style={styles.txtsty}>Username</Text>
              <TextInput
                value={this.state.userName}
                editable={this.state.edit}
                style={styles.inputtxtsty}
                keyboardType="email-address"
              />

              <Text style={styles.txtsty}>City </Text>
              <TextInput
                value={this.state.city1}
                editable={this.state.edit}
                style={styles.inputtxtsty}
                keyboardType="email-address"
              />
              <Picker
                style={{
                  height: 30,
                  marginLeft: this.state.width3,
                  width: this.state.width2,
                  alignSelf: "center",
                  color: "black",
                  borderRadius: 5,
                  marginVertical: 10,
                  marginTop: screenHeight * 2,
                  backgroundColor: "#F1EEFc",
                }}
                onValueChange={(itemValue) => this.updatecity(itemValue)}
                selectedValue={this.state.city}
                mode="dialog"
                textStyle={styles.pickerText}
              >
                {this.getcityes()}
              </Picker>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 18,
              marginLeft: this.state.width1,
              marginTop: screenHeight * 3,
            }}
          >
            Your Bio :
          </Text>
          <TextInput
            scrollEnabled={true}
            value={this.state.bio}
            onChangeText={this.updateAbout}
            placeholderTextColor="black"
            multiline={true}
            style={{
              color: "black",
              fontSize: 16,
              padding: 5,
              paddingEnd: 5,
              marginTop: screenHeight * 3,
              alignSelf: "center",
              width: this.state.width,
              height: screenHeight * 10,
              borderColor: "#0984e3",
              borderRadius: 10,
              borderWidth: 2,
              // outlineWidth: 0,
              backgroundColor: "white",
            }}
            maxLength={20}
          />

          <TouchableOpacity
            onPress={this.submit}
            style={{
              marginTop: 30,
              alignSelf: "center",
              backgroundColor: "#0984e3",
              borderRadius: 11,
              width: this.state.width4,
              height: screenHeight * 5,
            }}
          >
            <Text
              style={{
                color: "#EAF0F1",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 23,
                textAlignVertical: "center",
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: "#F1EEFc", height: 80 }}></View>
        </View>
      );
    } else {
      return <View />;
    }
  }
}
async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child("ksjdnf");
  const snapshot = await ref.put(blob);
  blob.close();
  return await snapshot.ref.getDownloadURL();
}
const styles = StyleSheet.create({
  BGsty: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  imgContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  imgwidhei: {
    width: 95,
    height: 95,
  },
  image: {
    width: screenWidth * 45,
    height: screenHeight * 30,
    alignSelf: "center",
    borderRadius: 30,
    marginTop: screenHeight * 10,
  },
  imgUser: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: "#FFF",
    borderWidth: 3,
    overflow: "hidden",
  },
  inputtxtsty: {
    borderBottomWidth: 1,
    paddingLeft: 15,
    marginTop: -screenHeight,
    fontFamily: "Poppins-ExtraLight",
  },
  txtsty: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 15,
    marginTop: screenHeight * 4,
  },

  txtsty1: {},
  changeContainer: {
    backgroundColor: "#020cab",
    padding: 10,
    borderRadius: 50,
  },
  changeTxt: {
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    color: "white",
  },
  userinfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userinfotxt: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 18,
    marginHorizontal: 20,
  },
});
