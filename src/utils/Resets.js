//text
const textXS = 10;
const textSM = 12;
const textMD = 14;
const textLG = 16;
const textXL = 18;

//size
const squared = (a = null) => ({ width: a, height: a });
const fill = {
  ...squared(),
  flex: 1
};

//spacing
const spaceMD = 15;
const spaceSM = 10;
const spaceXS = 5;

//positioning
const setPosition = (opt = "center", axis = "y") => {
  let pos = {
    alignItems: "center",
    justifyContent: "center"
  };

  switch (opt) {
    case "top-left":
      pos = {
        alignItems: "flex-start",
        justifyContent: "flex-start"
      };
      break;
    case "center":
    default:
      return pos;
  }

  return pos;
};

//margin
const setMargin = (mg = spaceMD) => ({
  margin: mg,
  marginHorizontal: mg,
  marginVertical: mg,
  marginTop: mg,
  marginBottom: mg,
  marginLeft: mg,
  marginRight: mg
});
const setHorizontalMargin = (mg = spaceMD) => ({
  marginHorizontal: mg,
  marginLeft: mg,
  marginRight: mg
});
const setVerticalMargin = (mg = spaceMD) => ({
  marginVertical: mg,
  marginTop: mg,
  marginBottom: mg
});

//padding
const setPadding = (pd = spaceMD) => ({
  padding: pd,
  paddingHorizontal: pd,
  paddingVertical: pd,
  paddingTop: pd,
  paddingBottom: pd,
  paddingLeft: pd,
  paddingRight: pd
});
const setHorizontalPadding = (pd = spaceMD) => ({
  paddingHorizontal: pd,
  paddingLeft: pd,
  paddingRight: pd
});
const setVerticalPadding = (pd = spaceMD) => ({
  paddingVertical: pd,
  paddingTop: pd,
  paddingBottom: pd
});

//radius
const setRadius = (rd = 3) => ({
  borderRadius: rd,
  borderTopEndRadius: rd,
  borderTopStartRadius: rd,
  borderTopLeftRadius: rd,
  borderTopRightRadius: rd,
  borderBottomEndRadius: rd,
  borderBottomStartRadius: rd,
  borderBottomLeftRadius: rd,
  borderBottomRightRadius: rd
});

//border
const setBorderWidth = (bw = null) => ({
  borderWidth: bw,
  borderEndWidth: bw,
  borderStartWidth: bw,
  borderTopWidth: bw,
  borderBottomWidth: bw,
  borderLeftWidth: bw,
  borderRightWidth: bw
});
const setHorizontalBorderWidth = (bw = null) => ({
  borderLeftWidth: bw,
  borderRightWidth: bw
});
const setVerticalBorderWidth = (bw = null) => ({
  borderTopWidth: bw,
  borderBottomWidth: bw
});

//main
const Resets = {
  setMargin,
  setHorizontalMargin,
  setVerticalMargin,
  setHorizontalPadding,
  setVerticalPadding,
  setPadding,
  setRadius,
  setBorderWidth,
  setHorizontalBorderWidth,
  setVerticalBorderWidth,
  textLG,
  textMD,
  textSM,
  textXL,
  textXS,
  squared,
  fill,
  spaceMD,
  spaceSM,
  spaceXS,
  setPosition
};

export { Resets };
