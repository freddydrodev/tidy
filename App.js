import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import { View } from "react-native";
import { Spinner } from "native-base";
import { Font } from "expo";
import { HomeScreen, LoginScreen, RegistrationScreen } from "./src/screens";
import { Fonts } from "./src/utils";

const Routes = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: LoginScreen,
    registration: RegistrationScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  state = {
    ready: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Fonts
    });

    this.setState({ ready: true });
  }

  render() {
    return this.state.ready ? (
      <Routes />
    ) : (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Spinner />
      </View>
    );
  }
}
