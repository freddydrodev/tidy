import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import { Header, Body, Right, Title, Button, Icon } from "native-base";
import { Colors, Resets } from "../utils";

const {
  setHorizontalPadding,
  squared,
  setPadding,
  setPosition,
  setHorizontalMargin
} = Resets;
class MainHeader extends Component {
  render() {
    const { header, icon, btn } = style;

    return (
      <Header noLeft noShadow style={header}>
        <Body>
          <Title style={{ fontFamily: "MPR_bold" }}>Header</Title>
        </Body>
        <Right>
          <Button style={btn} transparent rounded>
            <Icon type="EvilIcons" name="search" style={icon} />
          </Button>
          <Button style={btn} transparent rounded>
            <Icon type="EvilIcons" name="heart" style={icon} />
          </Button>
          <Button style={btn} transparent rounded>
            <Icon type="EvilIcons" name="cart" style={icon} />
          </Button>
        </Right>
      </Header>
    );
  }
}

export { MainHeader };

const style = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    ...Platform.select({
      android: {
        paddingTop: 24,
        height: 80,
        ...setHorizontalPadding()
      }
    })
  },
  btn: {
    ...squared(40),
    ...setPadding(null),
    ...setPosition(),
    marginRight: 0
  },
  icon: {
    ...setPosition(),
    ...setHorizontalMargin(null),
    fontSize: 22,
    width: 22
  }
});
