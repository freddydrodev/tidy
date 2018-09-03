import React, { Component } from "react";
import { Text, View } from "native-base";
import Carousel from "react-native-snap-carousel";
import { SectionLegend } from "../../../common";
import { Sizes } from "../../../utils";

class CategoriesSection extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionLegend title="Categories" subtitle="5 Categories" />
        <Carousel
          data={[1, 2, 3, 4]}
          sliderWidth={Sizes.winWidth}
          itemWidth={Sizes.winWidth / 3 - 15}
          renderItem={() => <Text>okok</Text>}
        />
      </React.Fragment>
    );
  }
}

export default CategoriesSection;
