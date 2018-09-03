import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, View, CardItem, Title, Subtitle } from "native-base";
import Carousel from "react-native-snap-carousel";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { SectionLegend } from "../../../common";
import { Sizes, Colors } from "../../../utils";
import Selection from "../../../assets/fonts/ticketing-icon/selection.json";
const Icon = createIconSetFromIcoMoon(Selection);

class CategoriesSection extends Component {
  state = {
    selectedCategory: 0,
    categories: [
      { icon: "concert", title: "Concert", nbr: 50 },
      { icon: "gastronimia", title: "Gastronimia", nbr: 5 },
      { icon: "home-party", title: "Home Party", nbr: 100 },
      { icon: "cinema", title: "Cinema", nbr: 12 },
      { icon: "exposition", title: "Art", nbr: 30 }
    ]
  };
  render() {
    const { selectedCategory, categories } = this.state;
    return (
      <React.Fragment>
        <SectionLegend title="Events Categories" subtitle="5 Categories" />
        <Carousel
          data={categories}
          sliderWidth={Sizes.winWidth}
          itemWidth={Sizes.winWidth * 0.5 - 15}
          inactiveSlideOpacity={0.5}
          activeSlideAlignment="start"
          onSnapToItem={id => {
            this.setState({ selectedCategory: id });
          }}
          renderItem={({ item, index }) => {
            const active = index === selectedCategory;
            const {
              itemAct,
              title,
              titleAct,
              subtitle,
              subtitleAct
            } = defaults;
            const itemStyle = active ? itemAct : defaults.item;
            const titleStyle = active ? titleAct : title;
            const subtitleStyle = active ? subtitleAct : subtitle;
            return (
              <Card>
                <CardItem style={itemStyle} button>
                  <View style={{ marginRight: 15 }}>
                    <Icon
                      name={item.icon}
                      size={40}
                      color={active ? "white" : Colors.primary}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Title style={titleStyle}>{item.title}</Title>
                    <Subtitle style={subtitleStyle}>
                      {item.nbr} Event(s)
                    </Subtitle>
                  </View>
                </CardItem>
              </Card>
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default CategoriesSection;

const defaults = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100
  },
  title: {
    color: Colors.text,
    textAlign: "left",
    fontFamily: "MPR_bold"
  },
  subtitle: {
    color: Colors.textFade,
    textAlign: "left",
    fontFamily: "MPR_light",
    fontSize: 12
  },
  itemAct: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
    backgroundColor: Colors.primary
  },
  titleAct: {
    color: Colors.text,
    textAlign: "left",
    fontFamily: "MPR_bold",
    color: "white"
  },
  subtitleAct: {
    color: Colors.textFade,
    textAlign: "left",
    fontFamily: "MPR_light",
    fontSize: 12,
    color: "white",
    opacity: 0.5
  }
});
