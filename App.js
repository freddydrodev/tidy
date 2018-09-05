import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import { View, Spinner, Icon } from "native-base";
import { Font } from "expo";
import { HomeScreen, LoginScreen, RegistrationScreen } from "./src/screens";
import { Fonts, Colors } from "./src/utils";

const Routes = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            type="Feather"
            name="home"
            color={tintColor}
            style={{ fontSize: 18, color: tintColor }}
          />
        )
      }
    },
    Events: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Events",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            type="Feather"
            name="list"
            color={tintColor}
            style={{ fontSize: 18, color: tintColor }}
          />
        )
      }
    },
    Calendar: {
      screen: RegistrationScreen,
      screen: LoginScreen,
      navigationOptions: {
        title: "Calendar",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            type="Feather"
            name="calendar"
            color={tintColor}
            style={{ fontSize: 18, color: tintColor }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: Colors.secondary,
      inactiveTintColor: Colors.textFade,
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "white",
      style: { borderTopColor: "#eee" }
    }
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
        <Spinner color={Colors.primary} />
      </View>
    );
  }
}
