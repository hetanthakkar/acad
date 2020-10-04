import React, { Component } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  LinearGradient,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as theme from "./theme1";
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var screenWidth = Math.round(Dimensions.get("window").width) / 100;

const { width } = Dimensions.get("window");
// const styles = StyleSheet.create({
//   flex: {
//     flex: 0.5,
//   },
//   column: {
//     flexDirection: "column",
//   },
//   row: {
//     flexDirection: "row",
//   },
//   header: {
//     backgroundColor: theme.colors.white,
//     paddingHorizontal: theme.sizes.padding,
//     paddingTop: theme.sizes.padding * 1.33,
//     paddingBottom: theme.sizes.padding * 0.66,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   articles: {},
//   destinations: {
//     flex: 1,
//     justifyContent: "space-between",
//     paddingBottom: 30,
//   },
//   destination: {
//     width: width - theme.sizes.padding * 2,
//     height: width * 0.6,
//     marginHorizontal: theme.sizes.margin,
//     paddingHorizontal: theme.sizes.padding,
//     paddingVertical: theme.sizes.padding * 0.66,
//     borderRadius: theme.sizes.radius,
//   },
//   destinationInfo: {
//     position: "absolute",
//     borderRadius: theme.sizes.radius,
//     paddingHorizontal: theme.sizes.padding,
//     paddingVertical: theme.sizes.padding / 2,
//     bottom: 20,
//     left: (width - theme.sizes.padding * 4) / (Platform.OS === "ios" ? 3.2 : 3),
//     backgroundColor: theme.colors.white,
//     width: width - theme.sizes.padding * 4,
//   },
//   recommendedHeader: {
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//     paddingHorizontal: theme.sizes.padding,
//   },
//   recommendation: {
//     width: (width - theme.sizes.padding * 2) / 7,
//     height: (width - theme.sizes.padding * 2) / 100,
//     marginHorizontal: 8,
//     backgroundColor: theme.colors.white,
//     borderRadius: theme.sizes.radius,
//     marginVertical: theme.sizes.margin * 0.5,
//   },
//   recommendationImage: {
//     width: (width - theme.sizes.padding * 2) / 8,
//     height: (width - theme.sizes.padding * 2) / 8,
//   },
//   avatar: {
//     width: theme.sizes.padding,
//     height: theme.sizes.padding,
//     borderRadius: theme.sizes.padding / 2,
//   },
//   rating: {
//     fontSize: theme.sizes.font * 2,
//     color: theme.colors.white,
//     fontWeight: "bold",
//   },
//   shadow: {
//     shadowColor: theme.colors.black,
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 5,
//   },
// });

class Articles extends Component {
  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? "active" : "gray"]}
        />
      );
    });
  }

  render() {
    return (
      <LinearGradient
        colors={["#09C6F9", "#045DE9"]}
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
    color: "white",
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

export default Articles;
