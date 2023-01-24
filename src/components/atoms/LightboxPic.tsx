import { Box } from "@mui/joy";
import { FC, useEffect, useRef, useState } from "react";
interface ILightboxPicProps {
  src: string;
  show: boolean;
  zoom?: number;
}

export const LightboxPic: FC<ILightboxPicProps> = (props) => {
  const picRef = useRef<null | HTMLElement>(null);
  const [xAxis, setXAxis] = useState<number>(0);
  const [yAxis, setYAxis] = useState<number>(0);
  const [draggable, setDraggable] = useState<boolean>(false);
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
    transform: `scale(${(props.zoom || 0) / 100 + 1})`,
    touchAction: "none",
    cursor: draggable ? "move" : "default",
  };

  const imgStyle = {
    minWidth: "0px",
    maxWidth: "1000px",
    transform: `translate(${xAxis}px, ${yAxis}px)`,
    touchAction: "none",
  };

  function handleMouseMove(e: PointerEvent) {
    if (picRef.current === null) return;
    const boundingRect = picRef.current?.getBoundingClientRect();

    if (e.movementX > 0) {
      if (boundingRect.left <= 0) {
        setXAxis((prev) => prev + e.movementX);
      }
    } else if (e.movementX < 0) {
      if (boundingRect.right >= window.innerWidth)
        setXAxis((prev) => prev + e.movementX);
    }
    if (e.movementY > 0) {
      if (boundingRect.top <= 0) {
        setYAxis((prev) => prev + e.movementY);
      }
    } else if (e.movementY < 0) {
      if (boundingRect.bottom >= window.innerHeight)
        setYAxis((prev) => prev + e.movementY);
    }
  }

  function handleMouseDown() {
    if (!picRef.current) return;
    picRef.current.addEventListener("pointermove", handleMouseMove);
  }

  function handleMouseUp() {
    if (!picRef.current) return;
    picRef.current.removeEventListener("pointermove", handleMouseMove);
  }

  useEffect(() => {
    if (picRef.current === null) return;
    const boundingRect = picRef.current?.getBoundingClientRect();

    if (
      boundingRect.left <= 0 ||
      boundingRect.right >= window.innerWidth ||
      boundingRect.top <= 0 ||
      boundingRect.bottom >= window.innerHeight
    )
      setDraggable(true);
    else setDraggable(false);

    picRef.current.onpointerdown = handleMouseDown;
    document.addEventListener("pointerup", handleMouseUp);
  }, [picRef.current]);

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
