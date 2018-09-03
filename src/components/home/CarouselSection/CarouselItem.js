import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Text, Card, CardItem, Button, Icon, H1, H3 } from "native-base";
import { LinearGradient } from "expo";
import { Colors } from "../../../utils";

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

const fill = {
  width: null,
  height: null,
  flex: 1
};
const noPadding = {
  paddingLeft: null,
  paddingTop: null,
  paddingBottom: null,
  paddingRight: null
};

const style = StyleSheet.create({
  main: {
    height,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 5,
    borderColor: "transparent"
  },
  item: {
    ...fill,
    ...noPadding
  },
  gradient: {
    ...fill,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: 15,
    overflow: "hidden",
    borderRadius: 5,
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
    fontSize: 18
  },
  h3: {
    color: "white",
    fontFamily: "MPR_medium",
    fontSize: 14
  },
  textSm: {
    color: "white",
    opacity: 0.6,
    fontSize: 12,
    fontFamily: "MPR_light"
  },
  img: {
    ...fill,
    height,
    borderRadius: 5
  }
});
