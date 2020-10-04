import React, { Component } from "react";
import { AirbnbRating } from "react-native-ratings"; //5.3.0
import { Icon } from "react-native-elements";

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import Markdown from "react-native-markdown-renderer";
import { Colors, Layout, FontSizes } from "./constants";
import { ScrollView, RectButton } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { View as AnimatableView } from "react-native-animatable";
import { RegularText, BoldText, SemiBoldText } from "./components/StyledText";
const ClipBorderRadius = ({ children, style }) => {
  return (
    <View
      style={[{ borderRadius: 3, overflow: "hidden", marginTop: 10 }, style]}
    >
      {children}
    </View>
  );
};

export default class HomePage extends Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }
  render() {
    return (
      <View>
        <View style={{ backgroundColor: Colors.blue }}>
          <Icon
            name="arrow-back"
            size={35}
            color="white"
            style={{
              flex: 1,
              alignSelf: "flex-start",
              margin: 10,
              backgroundColor: Colors.blue,
            }}
          />
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.headerRowSpeaker}>
            <View style={styles.headerColumnSpeaker}>
              <TouchableOpacity onPress={() => console.log("lsjng")}>
                <Image
                  source={{
                    uri:
                      "https://static.toiimg.com/photo/msid-71935935/71935935.jpg",
                  }}
                  style={styles.avatarMultiple}
                />
              </TouchableOpacity>

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => console.log("sdfn")}>
                  <SemiBoldText style={styles.headerText}>
                    Hetan Thakkar
                  </SemiBoldText>
                  <RegularText style={styles.headerText}>
                    @HetanThakkar
                  </RegularText>
                  <BoldText style={styles.talkTitleText}>
                    React Native Developer
                  </BoldText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <AnimatableView
          animation="fadeIn"
          useNativeDriver
          delay={Platform.OS === "ios" ? 50 : 150}
          duration={500}
          style={styles.content}
        >
          <View style={{ marginLeft: "1%", marginTop: "1%" }}>
            <View style={{ flexDirection: "row" }}>
              <SemiBoldText style={styles.sectionHeader}>Bio</SemiBoldText>
              <Icon
                name="pages"
                size={25}
                color="#808080"
                style={{ marginLeft: "20%", marginTop: "75%" }}
              />
            </View>
            <Text style={styles.txt}>
              Open source fanatic, technical founder, maker of LiteTimer,
              co-author of react-spring, co-author of immer, co-maintainer of
              react-native-macos, and author of vana.
            </Text>
            <View style={{ borderWidth: 0.5, borderColor: "#C0C0C0" }}></View>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-around",
              }}
            >
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <SemiBoldText style={styles.sectionHeader}>
                    Skills
                  </SemiBoldText>
                  <Icon
                    name="code"
                    size={25}
                    color="#808080"
                    style={{ marginTop: "65%", marginLeft: "20%" }}
                  />
                </View>
                <Text style={styles.txt}>Mobile Development,Cooking</Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <SemiBoldText style={styles.sectionHeader}>
                  Prefered Teaching Time:
                </SemiBoldText>

                <Text style={styles.txt}>4 PM -10 PM</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: "#C0C0C0" }}></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <SemiBoldText style={styles.sectionHeader}>
                    Location
                  </SemiBoldText>
                  <Icon
                    name="location-city"
                    size={25}
                    color="#808080"
                    style={{ marginTop: "65%", marginLeft: "20%" }}
                  />
                </View>
                <Text style={styles.txt}>Bhavngar,Gujarat</Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <SemiBoldText style={styles.sectionHeader}>
                  Price :
                </SemiBoldText>
                <Text style={styles.txt}>5 $ / hour</Text>
              </View>
            </View>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: "#C0C0C0" }}></View>

          <View
            style={{
              marginLeft: "1%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ flex: 1 }}>
              <SemiBoldText style={styles.sectionHeader}>
                Teaching Medium
              </SemiBoldText>
              <Text style={styles.txt}>In-Person</Text>
            </View>
            <View style={{ flex: 0.5 }}>
              <SemiBoldText style={styles.sectionHeader}>
                Teaching Location:
              </SemiBoldText>
              <Text style={styles.txt}>Student's House / Outside Cafe</Text>
            </View>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: "#C0C0C0" }}></View>

          <View style={{ flexDirection: "row", marginLeft: "1%" }}>
            <SemiBoldText style={styles.sectionHeader1}>Ratings:</SemiBoldText>
            <AirbnbRating
              count={5}
              selectedColor={Colors.blue}
              reviewColor={Colors.blue}
              reviews={["", "", "", "", "", ""]}
              defaultRating={3}
              starContainerStyle={{ marginLeft: "8%", marginTop: "-8%" }}
              onFinishRating={this.ratingCompleted}
              size={20}
              isDisabled={true}
            />
          </View>
        </AnimatableView>
        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={this._handlePressJobUrl}
            underlayColor="#fff"
          >
            <SemiBoldText style={styles.bigButtonText}>
              Book This Teacher
            </SemiBoldText>
          </RectButton>
        </ClipBorderRadius>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  bigButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 15,
    width: "40%",
    marginVertical: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton + 3,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  txt: { fontSize: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  avatarMultiple: {
    width: 90,
    alignSelf: "center",
    height: 90,
    borderRadius: 500,
    marginTop: -60,
    marginBottom: 10,
  },
  content: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  markdownBio: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 300,
    height: 200,
  },
  markdownTalkDescription: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 300,
    height: 600,
  },
  headerRowSpeaker: {
    flexDirection: "row",
    height: 140,
  },
  headerColumnSpeaker: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  headerContainer: {
    backgroundColor: Colors.blue,
    paddingTop: Constants.statusBarHeight + Layout.notchHeight - 30,
    paddingBottom: 20,
    paddingHorizontal: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "500",
    fontSize: FontSizes.subtitle,
  },
  talkTitleText: {
    color: "#fff",
    fontSize: FontSizes.title,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: FontSizes.bodyTitle,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },
  sectionHeader1: {
    fontSize: FontSizes.bodyTitle + 2,
    marginTop: 15,
    fontWeight: "bold",
    marginBottom: 3,
  },
  videoWrapper: {},
});
