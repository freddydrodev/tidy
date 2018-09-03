import React, { Component } from "react";
import { Container, Content } from "native-base";
import { Colors } from "../utils";
import { MainHeader } from "../common";
import CarouselSection from "../components/home/CarouselSection/CarouselSection";
import CategoriesSection from "../components/home/CategoriesSection/CategoriesSection";

class HomeScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: Colors.mainBg }}>
        <MainHeader />
        <Content>
          <CarouselSection />
          <CategoriesSection />
        </Content>
        {/* <Content>
          <CarouselSection />
          <CategoriesSection />
        </Content> */}
      </Container>
    );
  }
}

export { HomeScreen };
