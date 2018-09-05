import React, { Component } from "react";
import { Text, View, H1 } from "native-base";
import { StyleSheet } from "react-native";
import { Colors, Resets } from "../utils";

const {
  setRadius,
  squared,
  textSM,
  setVerticalPadding,
  textLG,
  spaceMD,
  spaceXS
} = Resets;

class SectionLegend extends Component {
  render() {
    const { title, subtitle } = this.props;
    const { main, h1, textSm, dot } = style;
    return title ? (
      <View style={main}>
        <H1 style={h1}>{title}</H1>
        {subtitle && (
          <React.Fragment>
            <View style={dot} />
            <Text style={textSm}>{subtitle}</Text>
          </React.Fragment>
        )}
      </View>
    ) : null;
  }
}

export { SectionLegend };

const style = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    ...setVerticalPadding()
  },
  h1: {
    paddingLeft: spaceMD,
    paddingRight: spaceXS,
    color: Colors.text,
    fontFamily: "MPR_black",
    fontSize: textLG,
    color: Colors.secondary
  },
  dot: {
    backgroundColor: Colors.textFade,
    ...squared(4),
    ...setRadius(2),
    marginRight: spaceXS
  },
  textSm: {
    color: Colors.textFade,
    fontSize: textSM,
    fontFamily: "MPR"
  }
});
