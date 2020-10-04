import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { Block, Text } from "./components";
import Mycard from "./mycard";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
const mock = [
  {
    id: 1,
    bloodType: "B+",
    name: "Hetan Thakkar",
    age: 24,
    gender: "Male",
    distance: 28,
    time: 12,
  },
  {
    id: 2,
    bloodType: "O-",
    name: "Vraj Raval",
    age: 19,
    gender: "Female",
    distance: 10,
    time: 22,
  },
  {
    id: 3,
    bloodType: "A+",
    name: "Kavin Mehta",
    age: 6,
    gender: "Male",
    distance: 15.3,
    time: 24,
  },

  {
    id: 3,
    bloodType: "A+",
    name: "Sarthak Sarvaiya",
    age: 6,
    gender: "Male",
    distance: 15.3,
    time: 24,
  },

  {
    id: 3,
    bloodType: "A+",
    name: "Heena Thakkar ",
    age: 6,
    gender: "Male",
    distance: 15.3,
    time: 24,
  },

  {
    id: 3,
    bloodType: "A+",
    name: "Nayan Thakakar",
    age: 6,
    gender: "Male",
    distance: 15.3,
    time: 24,
  },
];

var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
class App extends React.Component {
  state = {
    fontsLoaded: false,
  };
  loadFonts() {
    return Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    });
  }

  async componentDidMount() {
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }

  renderRequest(request) {
    return (
      <Block row card shadow color="#dfe6e9" style={styles.request} flex={10}>
        <TouchableOpacity>
          <Mycard photo="https://i.guim.co.uk/img/media/8648ba03d8fcd3da0e0c832d9def14a9a2a79cf9/0_133_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34334da6427189be695501fb2c58b7b1" />
        </TouchableOpacity>
        <Block
          flex={0.5}
          column
          middle
          style={{ marginLeft: -screenWidth * 1.2 }}
        >
          <Text h3 style={{ paddingVertical: 8 }}>
            {request.name}
          </Text>
          <Text caption semibold>
            Hey There Welcome To My App
          </Text>
        </Block>
        <Text caption semibold style={{ marginTop: screenHeight * 4 }}>
          19:45
        </Text>
      </Block>
    );
  }

  renderRequests() {
    const { requests } = this.props;
    return (
      <Block flex={1} column color="gray2" style={styles.requests}>
        <Container>
          <Header style={{ backgroundColor: "#f5f6fa" }}>
            <View style={{ flex: 0.3 }}>
              <Button transparent large>
                <Icon
                  name="arrow-back"
                  style={{ color: "#fd79a8", marginLeft: screenWidth * -2 }}
                />
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                mode="flat"
                placeholder="   Search or start a new chat"
                style={{
                  borderRadius: 20,
                  width: screenHeight * 75,
                  backgroundColor: "white",
                  borderWidth: 1,
                  marginLeft: screenWidth * -1.5,
                  height: screenHeight * 10,
                }}
              ></TextInput>
            </View>
            <Right></Right>
          </Header>
        </Container>
        <Text>{"\n"}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {requests.map((request) => (
            <TouchableOpacity activeOpacity={0.8} key={`request-${request.id}`}>
              {this.renderRequest(request)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    );
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <Block center middle>
          <Image
            style={{ width: 140, height: 140 }}
            source={require("./assets/profile.jpeg")}
          />
        </Block>
      );
    }

    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView style={{ backgroundColor: "#fd79a8" }}>
          {this.renderRequests()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

App.defaultProps = {
  requests: mock,
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fd79a8",
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  request: {
    padding: 20,
    width: screenWidth * 50,
    marginBottom: 15,
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90,
  },
});
