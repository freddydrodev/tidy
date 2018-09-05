import React, { Component } from "react";
import { Container, Content } from "native-base";
import { Colors } from "../utils";
import { MainHeader } from "../common";
import CarouselSection from "../components/home/CarouselSection/CarouselSection";
import CategoriesSection from "../components/home/CategoriesSection/CategoriesSection";
import EventsSection from "../components/home/EventsSection/EventsSection";

class HomeScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: Colors.mainBg }}>
        <MainHeader />
        <Content>
          <CarouselSection />
          <CategoriesSection />
          <EventsSection />
        </Content>
      </Container>
    );
  }
}

export { HomeScreen };
