import { Dimensions } from "react-native";

const Sizes = {
  winWidth: Dimensions.get("window").width,
  winHeight: Dimensions.get("window").height,
  carouselItemWidth: Dimensions.get("window").width - 60
};

export { Sizes };
