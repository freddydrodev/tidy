import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Container, Content, H1, View, H3, Text } from "native-base";
import Carousel from "react-native-snap-carousel";
import { Colors, Images, Sizes } from "../utils";
import { MainHeader } from "../common/MainHeader.js";

class HomeScreen extends Component {
  state = {
    PopularEvents: [
      {
        id: "1",
        image: Images.Popular.one,
        title: "Event One",
        location: "location one",
        date: "Event date"
      },
      {
        id: "2",
        image: Images.Popular.two,
        title: "Event two",
        location: "location two",
        date: "Event date"
      },
      {
        id: "3",
        image: Images.Popular.three,
        title: "Event three",
        location: "location three",
        date: "Event date"
      },
      {
        id: "4",
        image: Images.Popular.four,
        title: "Event four",
        location: "location four",
        date: "Event date"
      },
      {
        id: "5",
        image: Images.Popular.five,
        title: "Event five",
        location: "location five",
        date: "Event date"
      }
    ]
  };

  render() {
    return (
      <Container style={{ backgroundColor: Colors.mainBg }}>
        <MainHeader />
        <Content>
          <H1
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
              color: Colors.text,
              fontFamily: "MPR_light"
            }}
          >
            Popular Events
          </H1>
          <Carousel
            data={this.state.PopularEvents}
            renderItem={({ item, index }) => {
              const { image, date, location, title } = item;
              // console.log(image);
              console.log(Images.Populars[index]);
              return (
                <View>
                  <H1>{title}</H1>
                  <H3>{location}</H3>
                  <Text>{date}</Text>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../assets/images/pexels-photo-210922.jpeg")}
                  />
                </View>
              );
            }}
            itemWidth={Sizes.carouselItemWidth}
            sliderWidth={Sizes.winWidth}
            loop
          />
        </Content>
      </Container>
    );
  }
}

export { HomeScreen };

const style = StyleSheet.create({});
