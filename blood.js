import React from "react";
import * as Device from "expo-device";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
// import Chats from "./screens/profile1";
import * as Font from "expo-font";
import { Block } from "./components";
import * as theme from "./theme";
import * as mocks from "./mocks";
import Constants from "expo-constants";
class App extends React.Component {
  state = {
    fontsLoaded: false,
    device: "",
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
    await console.log(
      "sldnfsdf" + JSON.stringify(Constants.platform.web.ua.includes("Windows"))
    );
    this.setState({ device: Device.brand });
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }

  renderRequest(request) {
    return <Chats />;
  }

  renderRequests() {
    const { requests } = this.props;

    return (
      <Block flex={0.8} column color="gray2" style={styles.requests}>
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
    if (!this.state.fontsLoaded && !this.state.device) {
      return (
        <Block center middle>
          <Image
            style={{ width: 140, height: 140 }}
            source={require("./assets/icon.png")}
          />
        </Block>
      );
    }
    if (true) {
      return (
        <View>
          <Text style={{ fontSize: 32 }}>{this.state.device}</Text>
        </View>
      );
    }
    if (this.state.device == 10) {
      return (
        <View>
          <Text style={{ fontSize: 32 }}>Het phone</Text>
        </View>
      );
    }
    if (this.state.device == 6.0) {
      return (
        <View>
          <Text style={{ fontSize: 32 }}>Pc</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.safe}>{this.renderRequests()}</SafeAreaView>
    );
  }
}

App.defaultProps = {
  user: mocks.user,
  requests: mocks.requests,
  chart: mocks.chart,
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 1,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5,
  },
  requests: {
    marginTop: -55,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  },
});
