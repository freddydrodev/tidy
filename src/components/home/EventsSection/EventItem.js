import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  View,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  H3,
  H1,
  Right,
  Button,
  Icon
} from "native-base";
import { Colors, Images, Resets } from "../../../utils";

const { primary, secondary, text, textFade } = Colors;
const {
  setMargin,
  setPadding,
  textLG,
  textMD,
  textSM,
  textXS,
  setHorizontalMargin,
  setVerticalMargin,
  setHorizontalPadding,
  setVerticalPadding,
  setBorderWidth,
  setHorizontalBorderWidth,
  setRadius,
  setVerticalBorderWidth,
  squared
} = Resets;

const DetailSection = props => {
  const { iconType, icon, content } = props;
  const {
    detailSectionStyle,
    detailSectionIconStyle,
    detailSectionContentStyle
  } = style;
  return (
    <View style={detailSectionStyle}>
      <Icon
        type={iconType ? iconType : "EvilIcons"}
        name={icon}
        style={detailSectionIconStyle}
      />
      <Text style={detailSectionContentStyle}>{content}</Text>
    </View>
  );
};

class EventItem extends Component {
  render() {
    const {
      cardStyle,
      headerStyle,
      nameStyle,
      categoryStyle,
      wishStyle,
      whishIconStyle,
      detailsStyle,
      priceSectionStyle,
      fromStyle,
      priceSyle
    } = style;

    const { title, location, date, image } = this.props;
    return (
      <Card noShadow style={cardStyle}>
        <CardItem style={headerStyle} header>
          <Left>
            <Thumbnail square source={image} small />
            <Body>
              <H3 style={nameStyle}>{title}</H3>
              <Text style={categoryStyle}>In Category</Text>
            </Body>
            <Right>
              <Button rounded transparent small style={wishStyle}>
                <Icon type="EvilIcons" name="heart" style={whishIconStyle} />
              </Button>
            </Right>
          </Left>
        </CardItem>
        <CardItem cardBody style={{ paddingHorizontal: 15 }}>
          <View style={detailsStyle}>
            <DetailSection icon="location" content={location} />
            <DetailSection icon="calendar" content={date} />
          </View>
          <View style={priceSectionStyle}>
            <Text style={fromStyle}>from</Text>
            <H1 style={priceSyle}>$7</H1>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default EventItem;

const style = StyleSheet.create({
  cardStyle: {
    ...setMargin(null),
    marginBottom: 5,
    ...setRadius(null),
    borderColor: "#eee",
    ...setHorizontalBorderWidth(),
    backgroundColor: "white"
  },
  headerStyle: {
    ...setPadding(),
    paddingBottom: 0
  },
  nameStyle: {
    fontFamily: "MPR_bold",
    fontSize: textLG,
    color: Colors.secondary
  },
  categoryStyle: {
    fontFamily: "MPR_light",
    fontSize: textSM,
    color: Colors.primary,
    opacity: 0.5
  },
  wishStyle: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    ...setVerticalPadding(null)
  },
  whishIconStyle: {
    fontSize: 25,
    color: Colors.secondary,
    ...setHorizontalMargin(null)
  },
  detailsStyle: {
    ...setVerticalPadding(null),
    flex: 1
  },
  detailSectionStyle: {
    alignItems: "center",
    flexDirection: "row"
  },
  detailSectionIconStyle: { color: Colors.primary, fontSize: 20 },
  detailSectionContentStyle: {
    fontFamily: "MPR",
    fontSize: textMD,
    color: Colors.text
  },
  priceSectionStyle: {
    ...setPadding(null),
    justifyContent: "center",
    alignItems: "flex-end",
    ...squared(60)
  },
  fromStyle: {
    fontFamily: "MPR",
    fontSize: textXS,
    color: Colors.textFade
  },
  priceSyle: {
    fontFamily: "MPR_thin",
    fontSize: 28,
    color: Colors.primary
  }
});
