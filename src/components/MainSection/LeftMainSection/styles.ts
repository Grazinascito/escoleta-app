import { styled } from "@stitches/react";

export const Container = styled("div", {
  
  width: "49%",

  h1: {
    fontSize: "5.4rem",
    marginBottom: "8.4rem",
    fontFamily: "$ubuntu",
    color: "$titles",
  },
  p: {
    fontSize: "2.4rem",
    fontFamily: "$roboto",
    marginBottom: "4rem",
    color: "$texts",
  },

  
});

export const Button = styled('button', {
    
    width: "34.8rem",
    height: "7.2rem",
    borderRadius: "0.8rem",
    border: "none",
    background: "$greenpeace",
    color: "$blocks",
    fontWeight: "bold",
    display: "flex",

    alignItems: "center",

    div: {
      "&:first-child": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2FB86E",
        width: "7.2rem",
        height: "7.2rem",
        borderRadius: "0.8rem 0 0 0.8rem",
       
      },
      "&:last-child": {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        fontSize: "1.6rem"
      },
    },
  
})
