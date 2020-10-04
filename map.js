import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import firebase from "firebase";
import * as theme from "./theme2";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var users = [];
var c = 0;
var a, idt, currentCity, currentLocation, destinationName;
const { Marker } = MapView;
const { height, width } = Dimensions.get("screen");
export default class ParkingMap extends React.Component {
  async componentDidMount() {
    console.log("map ma" + 0);
    await firebase
      .database()
      .ref("id/")
      .on("value", async (snapshot) => {
        idt = snapshot.val().number;
        await this.setState({ idt });
        firebase
          .database()
          .ref("user/1")
          .on("value", async (snapshot) => {
            currentCity = snapshot.val().city;
            console.log("object");
            console.log(snapshot.val());
            currentLocation = snapshot.val().location.coords;
            await this.setState({ currentLocation });
            destinationName = "Bhavnagar";
            await this.setState({ destinationName });
            console.log(
              "destination is " + JSON.stringify(this.state.destinationName)
            );
          });
        for (let k = 1; k < 8; k++) {
          firebase
            .database()
            .ref("user/" + k)
            .on("value", async (snapshot) => {
              if (snapshot.val().city == currentCity) {
                a = {
                  id: c,
                  about: snapshot.val().about,
                  title: snapshot.val().name,
                  coordinate: snapshot.val().location.coords,
                  skill: snapshot.val().specifics,
                  rating: "3 / 5",
                  price: snapshot.val().charge,
                };
                users.push(a);
                c++;
              }
              await this.setState({ users });
            });
        }
      });
  }

  state = {
    hours: {},
    user: [],
    destinationName: {
      name: "Unknown",
    },
    currentLocation: {
      latitude: 21.7278751,
      longitude: 72.1380959,
      latitudeDelta: 0.0122 / 2,
      longitudeDelta: 0.0121 / 2,
    },
    active: null,
    idt: "",
    activeModal: null,
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.headerTitle}>Detected location</Text>
          <Text style={styles.headerLocation}>
            {this.state.destinationName.name}
          </Text>
        </View>
      </View>
    );
  }

  renderParking = (item) => {
    const { hours } = this.state;
    const totalPrice = item.price * hours[item.id];

    return (
      <TouchableWithoutFeedback
        style={{ alignSelf: "center", flexWrap: "wrap" }}
        key={`parking-${item.id}`}
        onPress={() => this.setState({ active: item.id })}
      >
        <View style={[styles.parking, styles.shadow]}>
          <View style={styles.hours}>
            <Text style={styles.hoursTitle}>{item.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 18 }}>{item.about}</Text>
            </View>
          </View>
          <View style={styles.parkingInfoContainer}>
            <View style={styles.parkingInfo}>
              <View style={styles.parkingIcon}>
                <Ionicons
                  name="ios-pricetag"
                  size={theme.SIZES.icon}
                  color={theme.COLORS.white}
                />
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  {item.price}
                </Text>
              </View>
              <View style={styles.parkingIcon}>
                <Ionicons
                  name="ios-star"
                  size={theme.SIZES.icon}
                  color={theme.COLORS.white}
                />
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  {"  "}
                  {item.rating}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buy}
              onPress={() => this.setState({ activeModal: item })}
            >
              <View style={styles.buyTotal}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Text style={styles.buyTotalPrice}>Visit </Text>
                  <Text style={styles.buyTotalPrice}>Profile </Text>
                </View>
              </View>
              <View style={styles.buyBtn}>
                <FontAwesome
                  name="angle-right"
                  size={theme.SIZES.icon * 1.75}
                  color={theme.COLORS.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderParkings = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        data={this.state.users}
        extraData={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => this.renderParking(item)}
      />
    );
  };

  render() {
    const { currentPosition, parkings } = this.props;
    if (!this.state.user) return <View></View>;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <MapView
          initialRegion={{
            longitude: this.state.currentLocation.longitude,
            latitude: this.state.currentLocation.latitude,
            latitudeDelta: 0.0122 / 2,
            longitudeDelta: 0.0121 / 2,
          }}
          style={styles.map}
        >
          {this.state.users?.map((parking) => (
            <Marker
              key={`marker-${parking.id}`}
              coordinate={parking.coordinate}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setState({ active: parking.id })}
              >
                <View
                  style={[
                    styles.marker,
                    styles.shadow,
                    this.state.active === parking.id ? styles.active : null,
                  ]}
                >
                  <Text style={styles.markerPrice}>${parking.price}</Text>
                  <Text style={styles.markerStatus}>
                    {" "}
                    ({parking.free}/{parking.spots})
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </Marker>
          ))}
        </MapView>
        {this.renderParkings()}
      </View>
    );
  }
}
ParkingMap.defaultProps = {
  currentPosition: {
    latitude: 21.7278751,
    longitude: 72.1380959,
    latitudeDelta: 0.0122 / 2,
    longitudeDelta: 0.0121 / 2,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: theme.SIZES.base * 2,
    paddingTop: theme.SIZES.base * 2,
    paddingBottom: theme.SIZES.base * 1.5,
    backgroundColor: "#fc0f84",
  },
  headerTitle: {
    color: theme.COLORS.white,
    fontSize: 18,
  },
  headerLocation: {
    fontSize: theme.SIZES.font,
    color: theme.COLORS.white,
    paddingVertical: theme.SIZES.base / 3,
  },
  map: {
    flex: 3,
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: theme.SIZES.base * 2,
  },
  parking: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: theme.COLORS.black,
    borderRadius: 6,
    padding: 10,
    flexWrap: "wrap",
    width: "95%",
    marginHorizontal: theme.SIZES.base * 1.5,
  },
  buy: {
    flex: 3,
    flexDirection: "row",
    paddingHorizontal: theme.SIZES.base * 2,
    paddingVertical: 14,
    backgroundColor: theme.COLORS.red,
    borderRadius: 6,
  },
  buyTotalPrice: {
    color: theme.COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  marker: {
    flexDirection: "row",
    backgroundColor: theme.COLORS.white,
    borderColor: theme.COLORS.grey,
    borderRadius: theme.SIZES.base * 2,
    paddingVertical: 12,
    paddingHorizontal: theme.SIZES.base * 2,
    borderWidth: 1.5,
  },
  markerPrice: { color: theme.COLORS.red, fontWeight: "bold" },
  markerStatus: { color: theme.COLORS.gray },
  shadow: {
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  active: {
    borderColor: theme.COLORS.red,
  },
  hours: {
    flex: 1,
    flexDirection: "column",
    marginLeft: theme.SIZES.base / 2,
    justifyContent: "space-evenly",
  },
  hoursTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.COLORS.white,
  },
  hoursDropdown: {
    borderRadius: theme.SIZES.base / 2,
    borderColor: theme.COLORS.overlay,
    borderWidth: 1,
    padding: theme.SIZES.base,
    marginRight: theme.SIZES.base / 2,
  },
  hoursDropdownOption: {
    padding: 5,
    fontSize: theme.SIZES.font * 0.8,
  },
  hoursDropdownStyle: {
    marginLeft: -theme.SIZES.base,
    paddingHorizontal: theme.SIZES.base / 2,
    marginVertical: -(theme.SIZES.base + 1),
  },
  parkingInfoContainer: { flex: 1.2, flexDirection: "row" },
  parkingInfo: {
    justifyContent: "space-evenly",
    marginHorizontal: theme.SIZES.base * 0.5,
  },
  parkingIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modal: {
    flexDirection: "column",
    height: height * 0.75,
    padding: theme.SIZES.base * 2,
    backgroundColor: theme.COLORS.white,
    borderTopLeftRadius: theme.SIZES.base,
    borderTopRightRadius: theme.SIZES.base,
  },
  modalInfo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: theme.SIZES.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.COLORS.overlay,
    borderBottomColor: theme.COLORS.overlay,
  },
  modalHours: {
    paddingVertical: height * 0.11,
  },
  modalHoursDropdown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: theme.SIZES.base,
  },
  payBtn: {
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.SIZES.base * 1.5,
    backgroundColor: theme.COLORS.red,
  },
  payText: {
    fontWeight: "600",
    fontSize: theme.SIZES.base * 1.5,
    color: theme.COLORS.white,
  },
});
