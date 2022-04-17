import { createStitches, globalCss, styled } from "@stitches/react";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: { backgroundColor: "$background", fontSize: "1.6rem" },
  html: {fontSize: "62.5%"}
});

createStitches({
  theme: {
    colors: {
      greenpeace: "#34CB79",
      desaturated: "#E1FAEC",
      titles: "#322153",
      texts: "#6C6C80",
      supportText: "#A0A0B2",
      blocks: "#FFFFFF",
      background: "#F0F0F5",
    },
    space: {},
    fonts: {
      roboto: "'Roboto', sans-serif",
      ubuntu: "'Ubuntu', sans-serif"
    },
  },
});
