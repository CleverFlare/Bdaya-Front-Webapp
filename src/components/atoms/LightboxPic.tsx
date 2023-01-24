import { Box } from "@mui/joy";
import { FC, useEffect, useRef, useState } from "react";
interface ILightboxPicProps {
  src: string;
  show: boolean;
}

export const LightboxPic: FC<ILightboxPicProps> = (props) => {
  const picRef = useRef<null | HTMLElement>(null);
  const isDisplayed = props.show;
  const rootStyle = {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: isDisplayed ? "flex" : "none",
    touchAction: "none",
  };

  const imgStyle = {
    minWidth: "0px",
    maxWidth: "1000px",
    touchAction: "none",
  };

  return (
    <Box sx={rootStyle}>
      <Box
        component="img"
        src={props.src}
        sx={imgStyle}
        draggable={false}
        ref={picRef}
      />
    </Box>
  );
};
