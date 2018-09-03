import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import { SectionLegend } from "../../../common";
import CarouselItem from "./CarouselItem.js";
import { Images, Sizes } from "../../../utils";

class CarouselSection extends Component {
  state = {
    PopularEvents: [
      {
        id: "1",
        image: Images.Popular.one,
        title: "Event One",
        location: "Location one",
        date: "Event date"
      },
      {
        id: "2",
        image: Images.Popular.two,
        title: "Event two",
        location: "Location two",
        date: "Event date"
      },
      {
        id: "3",
        image: Images.Popular.three,
        title: "Event three",
        location: "Location three",
        date: "Event date"
      },
      {
        id: "4",
        image: Images.Popular.four,
        title: "Event four",
        location: "Location four",
        date: "Event date"
      },
      {
        id: "5",
        image: Images.Popular.five,
        title: "Event five",
        location: "Location five",
        date: "Event date"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <SectionLegend title="Popular" subtitle="5 Events" />
        <Carousel
          data={this.state.PopularEvents}
          style={{ margin: 15 }}
          renderItem={({ item, index }) => {
            return <CarouselItem item={item} key={index} />;
          }}
          itemWidth={Sizes.carouselItemWidth}
          sliderWidth={Sizes.winWidth}
          layout="stack"
          autoplay
          loop
        />
      </React.Fragment>
    );
  }
}

export default CarouselSection;
