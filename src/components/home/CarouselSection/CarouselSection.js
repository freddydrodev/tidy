import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import { SectionLegend } from "../../../common";
import CarouselItem from "./CarouselItem.js";
import { Sizes, Resets } from "../../../utils";
import PopularEvents from "../../../config/db";

class CarouselSection extends Component {
  state = {
    PopularEvents: []
  };

  componentDidMount() {
    this.setState({ PopularEvents });
  }

  render() {
    return (
      <React.Fragment>
        <SectionLegend title="Popular Events" subtitle="5 Events" />
        <Carousel
          autoplay
          loop
          data={this.state.PopularEvents}
          containerCustomStyle={{ ...Resets.setHorizontalMargin() }}
          renderItem={({ item, index }) => {
            return <CarouselItem item={item} key={index} />;
          }}
          itemWidth={Sizes.carouselItemWidth}
          sliderWidth={Sizes.carouselSlideWidth}
        />
      </React.Fragment>
    );
  }
}

export default CarouselSection;
