import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import styles from "./profileStyle";
import firebase from "firebase";
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
var a = [];
var temp = " ";
var disp = [];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disp: [],
      a: [
        { skill: "Piano", price: "120$", lessons: "10" },
        { skill: "Drum", price: "150$", lessons: "12" },
        { skill: "Drum", price: "150$", lessons: "12" },
        { skill: "Drum", price: "150$", lessons: "12" },
        { skill: "Drum", price: "150$", lessons: "12" },
      ],
      learnSkill: ["Coding", "Musical Instrument", "Psychology"],
      teachTiming: ["6:00 AM - 9:00 PM"],
      teachLocation: ["Student's House", "Student's House"],
      name: "Hetan",
      city: "Bhavnagar",
      state: "Gujarat",
      rating: 0,
      about: "Just a Random Text",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      skill: "none",
      photo:
        "https://pbs.twimg.com/profile_images/799977947461517312/D0dSS5qF_400x400.jpg",
    };
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton = () => {
    if (
      this.props.navigation.getParam("from") == "Category" ||
      this.props.navigation.state.params.from == "Category"
    ) {
      this.props.navigation.navigate("Category");
    }
    if (this.props.navigation.getParam("from") == "bar") {
      this.props.navigation.navigate("Bar");
    }
    return true;
  };
  async componentDidMount() {
    // console.log("provfile" + this.props.navigation.getParam("id"));
    // console.log(
    //   "jdsnfkjsdnfkjsdnmf" +
    //     JSON.stringify(this.props.navigation.getParam("from"))
    // );

    // a = [
    //   { skill: "Piano", price: "120$", lessons: "10" },
    //   { skill: "Drum", price: "150$", lessons: "12" },
    //   { skill: "Drum", price: "150$", lessons: "12" },
    //   { skill: "Drum", price: "150$", lessons: "12" },
    //   { skill: "Drum", price: "150$", lessons: "12" },
    // ];
    // for (let i = 0; i < a.length; i++) {
    //   disp = this.state.disp;
    //   disp.push({
    //     value: temp.concat(
    //       "Skill :",
    //       temp,
    //       a[i].skill,
    //       "\n",
    //       " Price/Lessons:",
    //       temp,
    //       a[i].price,
    //       temp,
    //       "\n",
    //       " Total Lesson:",
    //       temp,
    //       a[i].lessons
    //     ),
    //   });
    // }
    // console.log(disp, "disp");
    // this.setState({ disp });
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    // console.log("id in profile is" + this.props.navigation.getParam("id"));
    // console.log("curremt id is" + this.props.navigation.state.params.id);
    await firebase
      .database()
      .ref("user/" + 1)
      .on("value", async (snapshot) => {
        await this.setState({ name: snapshot.val().name });
        await this.setState({ city: snapshot.val().city });
        await this.setState({ state: snapshot.val().state });
        await this.setState({ about: snapshot.val().about });
        await this.setState({ skill: snapshot.val().skill });
        await this.setState({ detail: snapshot.val().detail });
        await this.setState({ photo: snapshot.val().photo });
        await this.setState({ learnSkill: [snapshot.val().learnSkill] });
        await this.setState({ teachTiming: snapshot.val().timing });
        a = snapshot.val().skills;
        for (let i = 0; i < a.length; i++) {
          disp = this.state.disp;
          disp.push({
            value: temp.concat(
              "Skill :",
              temp,
              a[i].skill,
              "\n",
              "Specifics :",
              temp,
              a[i].specific,
              "\n",
              " Price/Lessons:",
              temp,
              a[i].price,
              temp,
              "\n",
              " Total Lessons:",
              temp,
              a[i].lesson
            ),
          });
        }
        this.setState({ disp });
        // console.log("skills are", snapshot.val().skills);
      });
  }
  displaySkills = () => {
    // console.log(this.state.disp, "ljdnsldncolkm");
    // console.log(this.state.disp);
    return this.state.disp.map((value) => (
      <Text style={styles.skills1}>{value.value}</Text>
    ));
  };
  displayTeachLocation = () => {
    return this.state.teachLocation.map((value) => (
      <Text style={styles.skills}>{value}</Text>
    ));
  };
  displayTiming = () => {
    return this.state.teachTiming.map((value) => (
      <Text style={styles.skills}>{value}</Text>
    ));
  };
  displayLearn = () => {
    // console.log("this", this.state.learnSkill);
    return this.state.learnSkill.map((value) => (
      <Text style={styles.learnText}>{value}</Text>
    ));
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.dp}
          source={{
            uri: this.state.photo,
          }}
        />
        <Text style={styles.name}>{this.state.name}</Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={styles.location}>Location : </Text>
          <Text style={styles.local}>
            {this.state.city},{this.state.state}
          </Text>
        </View>
        <View style={styles.border}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
            alignSelf: "center",
          }}
        >
          <Text style={styles.descriptionTitle}>Description : </Text>
          <Text style={styles.description}>{this.state.about}</Text>
        </View>
        <View style={styles.border}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}></View>
          <View style={styles.border}></View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
              flex: 1,
            }}
          >
            <Text
              style={{
                marginTop: 40,
                fontSize: 24,
                color: "#3498db",
                fontWeight: "bold",
              }}
            >
              Skills Vraj Have:
            </Text>
            {this.displaySkills()}
          </View>
        </View>
        <View style={styles.border}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignSelf: "center",
          }}
        >
          <Text style={styles.about}>Teaching Location :</Text>
          <View style={styles.view}>{this.displayTeachLocation()}</View>
        </View>
        <View style={styles.border}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignSelf: "center",
          }}
        >
          <Text style={styles.about}>Teaching Time :</Text>
          <View style={styles.view}>{this.displayTiming()}</View>
        </View>
        <View style={styles.border}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignSelf: "center",
          }}
        >
          <Text style={styles.about}>Wants to Learn :</Text>
          <View style={styles.learn}>{this.displayLearn()}</View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("ChatScreen", {
              id: this.props.navigation.getParam("id"),
              from:
                this.props.navigation.getParam("from") ||
                this.props.navigation.state.params.from,
            })
          }
        >
          <Text style={styles.buttonText}>Get In Touch</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
