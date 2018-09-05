import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Text, Card, CardItem, Button, Icon, H1, H3 } from "native-base";
import { LinearGradient } from "expo";
import { Resets } from "../../../utils";

const {
  setPadding,
  fill,
  setRadius,
  setBorderWidth,
  textMD,
  textSM,
  textXL,
  spaceMD
} = Resets;
const height = 300;
class CarouselItem extends Component {
  render() {
    const { main, item, gradient, wish, h1, h3, textSm, img } = style;
    const { image, date, location, title } = this.props.item;
    return (
      <Card style={main}>
        <CardItem
          cardBody
          style={item}
          button
          onPress={() => alert(`cliked on ${title}`)}
        >
          <LinearGradient
            colors={["rgba(155, 35, 234, .2)", "#5f72bd"]}
            style={gradient}
          >
            <Button rounded transparent light style={wish}>
              <Icon type="EvilIcons" name="heart" style={{ fontSize: 32 }} />
            </Button>
            <H1 style={h1}>{title}</H1>
            <H3 style={h3}>{location}</H3>
            <Text style={textSm}>{date}</Text>
          </LinearGradient>
          <Image style={img} resizeMode="cover" source={image} />
        </CardItem>
      </Card>
    );
  }
}

export default CarouselItem;

const style = StyleSheet.create({
  main: {
    height,
    backgroundColor: "white",
    elevation: 2,
    ...setRadius(3),
    ...setBorderWidth(null)
  },
  item: {
    ...fill,
    ...setPadding(null)
  },
  gradient: {
    ...fill,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: spaceMD,
    overflow: "hidden",
    ...setRadius(3),
    justifyContent: "flex-end"
  },
  wish: {
    position: "absolute",
    top: 0,
    right: 0
  },
  h1: {
    color: "white",
    fontFamily: "MPR_black",
    fontSize: textXL
  },
  h3: {
    color: "white",
    fontFamily: "MPR_medium",
    fontSize: textMD
  },
  textSm: {
    color: "white",
    opacity: 0.6,
    fontSize: textSM,
    fontFamily: "MPR_light"
  },
  img: {
    ...fill,
    height,
    borderRadius: 3
  }
});
