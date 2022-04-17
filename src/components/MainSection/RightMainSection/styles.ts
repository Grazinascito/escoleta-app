import { styled } from "@stitches/react";

export const ContainerRight = styled('div', {
    
    width: "50%",
    height: "70rem",
    overflow: "hidden",
    

    img: {
        width: "80rem",
        height: "70rem",
        
        position: "absolute",
        left: "50%",

        '&:first-child': {
            zIndex: "1",
            width: "80rem"
        }


    }
})