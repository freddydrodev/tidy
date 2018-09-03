import React, { Component } from "react";
import { Text, View, H1 } from "native-base";
import { StyleSheet } from "react-native";
import { Colors } from "../utils";

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
    paddingVertical: 15,
    backgroundColor: "#F9FBFF"
  },
  h1: {
    paddingLeft: 15,
    paddingRight: 5,
    color: Colors.text,
    fontFamily: "MPR_black",
    fontSize: 16,
    color: Colors.secondary
  },
  dot: {
    backgroundColor: Colors.textFade,
    width: 4,
    height: 4,
    borderRadius: 2,
    marginRight: 5
  },
  textSm: {
    color: Colors.textFade,
    fontSize: 12,
    fontFamily: "MPR"
  }
});
