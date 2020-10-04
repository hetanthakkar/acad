import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Theme from "./styles/Theme";

const Credited = (
  <Text
    style={{
      color: "blue",
      fontSize: 10,
      fontFamily: "Poppins-Regular",
      textAlign: "center",
    }}
  >
    Credited
  </Text>
);
const Success = (
  <Text
    style={{
      color: "#8d44ad",
      fontSize: 10,
      fontFamily: "Poppins-Regular",
      textAlign: "center",
    }}
  >
    Success
  </Text>
);
const Falied = (
  <Text
    style={{
      color: "red",
      fontSize: 10,
      fontFamily: "Poppins-Regular",
      textAlign: "center",
    }}
  >
    Falied
  </Text>
);

const Movie = (
  <Text style={{ fontSize: 18, color: "black", fontFamily: "Poppins-Light" }}>
    Movie Ticket Book
  </Text>
);
const MobileTxt = (
  <Text style={{ fontSize: 18, color: "#000", fontFamily: "Poppins-Light" }}>
    Moblie Recharge
  </Text>
);

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transfer: [
        {
          userimage: require("./assets/img/boy.png"),
          username: "Chisto",
          transferdate: "27 may 2019",
          amount: 322,
          payclip: "Debited",
        },
        {
          userimage: require("./assets/img/girl.png"),
          username: "Natasha",
          transferdate: "26 may 2019",
          amount: 4865,
          payclip: Credited,
        },
        {
          userimage: require("./assets/img/popcorn.png"),
          username: Movie,
          transferdate: "16 may 2019",
          amount: 345,
          payclip: Falied,
        },
        {
          userimage: require("./assets/img/smartphone.png"),
          username: MobileTxt,
          transferdate: "26 april 2019",
          amount: 87,
          payclip: Success,
        },
        {
          userimage: require("./assets/img/girl.png"),
          username: "Natasha",
          transferdate: "23 april 2019",
          amount: 2344,
          payclip: "Debited",
        },
        {
          userimage: require("./assets/img/woman.png"),
          username: "Amy Jones",
          transferdate: "16 apr 2019",
          amount: 785,
          payclip: Credited,
        },
        {
          userimage: require("./assets/img/popcorn.png"),
          username: Movie,
          transferdate: "1 apr 2019",
          amount: 757,
          payclip: Falied,
        },
        {
          userimage: require("./assets/img/man.png"),
          username: "Smith",
          transferdate: "29 march 2019",
          amount: 71,
          payclip: "Debited",
        },
        {
          userimage: require("./assets/img/boy.png"),
          username: "Chisto",
          transferdate: "27 march 2019",
          amount: 234,
          payclip: Credited,
        },
        {
          userimage: require("./assets/img/woman.png"),
          username: "Amy Jones",
          transferdate: "26 march 2019",
          amount: 655,
          payclip: "Debited",
        },
        {
          userimage: require("./assets/img/smartphone.png"),
          username: MobileTxt,
          transferdate: "13 march 2019",
          amount: 245,
          payclip: Success,
        },
        {
          userimage: require("./assets/img/man.png"),
          username: "Smith",
          transferdate: "6 march 2019",
          amount: 86,
          payclip: Credited,
        },
      ],
    };
  }
  _renderTransfer(rowdata) {
    return (
      <TouchableOpacity>
        <View style={styles.transferbox}>
          <View style={styles.flexrow}>
            <View style={styles.imgContainer}>
              <Image style={styles.userimg} source={rowdata.item.userimage} />
            </View>
            <View style={styles.flexrow}>
              <View style={styles.userdetails}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#000",
                    fontFamily: "Poppins-Light",
                  }}
                >
                  {rowdata.item.username}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    color: "#000",
                    fontFamily: "Poppins-Thin",
                  }}
                >
                  {rowdata.item.transferdate}
                </Text>
              </View>
            </View>
            <View style={styles.paymentsty}>
              <Text style={styles.amountSty}>$ {rowdata.item.amount}</Text>
              <Text style={styles.debited}>{rowdata.item.payclip}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Theme.bgcolor }}>
        <View style={{ padding: 10, paddingLeft: 15 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              fontFamily: "Poppins-Bold",
              alignSelf: "center",
            }}
          >
            Transaction History
          </Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.transfer}
            renderItem={this._renderTransfer.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexrow: {
    flex: 1,
    flexDirection: "row",
  },
  transferbox: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
  },
  imgContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 10,
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    elevation: 2,
    shadowColor: "lightgrey",
    shadowOffset: { width: -0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  debited: {
    fontSize: 10,
    paddingVertical: 2,
    color: "green",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  amountSty: {
    color: "#fcad50",
    fontSize: 20,
    fontFamily: "Poppins-Light",
  },
  userimg: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  userdetails: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  paymentsty: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
