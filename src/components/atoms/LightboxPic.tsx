import { Box } from "@mui/joy";
import { FC, useEffect, useRef, useState } from "react";
interface ILightboxPicProps {
  src: string;
  show: boolean;
}

export const LightboxPic: FC<ILightboxPicProps> = (props) => {
  const [xAxis, setXAxis] = useState<number>(0);
  const [yAxis, setYAxis] = useState<number>(0);
  const isDisplayed = props.show;
  const rootStyle = {
    minWidth: "0px",
    maxWidth: "1000px",
    overflow: "hidden",
    cursor: "zoom-in",
  };

  const imgStyle = {
    "--x": `${xAxis}%`,
    "--y": `${yAxis}%`,
    display: isDisplayed ? "block" : "none",
  };

  const imgSX = {
    "--x": `0%`,
    "--y": `0%`,
    width: "100%",
    touchAction: "none",
    transform: "scale(1)",
    transformOrigin: `var(--x) var(--y)`,
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(2)",
    },
  };

  let width: number, height: number, x: number, y: number;

  function handlePointerMove(e: any) {
    const horizontal = ((e.clientX - x) / width) * 100;
    const vertical = ((e.clientY - y) / height) * 100;

    if (horizontal >= 0 && horizontal <= 100) setXAxis(horizontal);
    if (vertical >= 0 && vertical <= 100) setYAxis(vertical);
  }

  function handlePointerEnter(e: any) {
    const el = e.target;
    if (!e.target) return;
    const size = el.getBoundingClientRect();

    width = size.width;
    height = size.height;
    x = size.x;
    y = size.y;

    el.onpointermove = handlePointerMove;
  }

  return (
    <Box sx={rootStyle}>
      <Box
        component="img"
        src={props.src}
        sx={imgSX}
        style={imgStyle}
        draggable={false}
        onPointerEnter={handlePointerEnter}
      />
    </Box>
  );
};
