import { styled } from "@stitches/react";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "1.9rem",
  },
  paddingTop: "4.6rem",
  fontFamily: "$roboto",
  fontWeight: "bold",
  fontSize: "1.6rem",
  color: "$titles",
});
