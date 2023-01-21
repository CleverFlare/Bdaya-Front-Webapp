import { FC, useState } from "react";
import { Box, Stack } from "@mui/joy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { LightboxButton } from "../atoms/LightboxButton";
import { LightboxPic } from "../atoms/LightboxPic";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

interface ILightboxProps {
  images: string[];
  init?: number;
  loop?: boolean;
  open: boolean;
  onClose?: () => void;
}

export const Lightbox: FC<ILightboxProps> = (props) => {
  if (!props.open) return <></>;
  if ((props.init || 0) >= props.images.length)
    throw Error(
      `please provide a number between ${0} and ${props.images.length}`
    );

  // ===== state =====
  const MAX_ZOOM = 150;
  const MIN_ZOOM = -50;
  const [image, setImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(0);

  //====== styles =======
  const rootStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    bgcolor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
    marginTop: "0 !important",
    overflow: "hidden",
  };
  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 5,
  };
  const toolbarStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 1,
    zIndex: 5,
  };

  //======= logic =======
  type NumberOrNullish = number | null | undefined;

  class Logic {
    constructor(
      private propVal: NumberOrNullish,
      private stateVal: NumberOrNullish,
      private zoom: number
    ) {}

    #limitGate(num: number, prev: number): void {
      const isInfinite = props.loop === true;
      const positiveLimit = props.images.length - 1;
      const negativeLimit = 0;
      const isAtPositiveLimit = num > positiveLimit;
      const isAtNegativeLimit = num < negativeLimit;
      const typeOfMovement = num > prev ? "+" : "-";
      let valueToBeSet = 0;

      switch (typeOfMovement) {
        case "+":
          if (isAtPositiveLimit)
            valueToBeSet = isInfinite ? negativeLimit : positiveLimit;
          else valueToBeSet = num;
          break;
        case "-":
          if (isAtNegativeLimit)
            valueToBeSet = isInfinite ? positiveLimit : negativeLimit;
          else valueToBeSet = num;
          break;
        default:
          if (isAtPositiveLimit)
            valueToBeSet = isInfinite ? negativeLimit : positiveLimit;
          else valueToBeSet = num;
      }

      return setImage(valueToBeSet);
    }

    // this higher order function passes either the init prop or the image state to be used
    #sourceSwitcher(): number {
      const isAtInit = image === null;

      return isAtInit ? this.propVal || 0 : this.stateVal || 0;
    }

    resetZoom(): void {
      setZoom(0);
    }

    getNextImage() {
      const prevVal = this.#sourceSwitcher();
      const nextVal = prevVal + 1;
      this.#limitGate(nextVal, prevVal);
      this.resetZoom();
    }

    getPrevImage() {
      const prevVal = this.#sourceSwitcher();
      const nextVal = prevVal - 1;
      this.#limitGate(nextVal, prevVal);
      this.resetZoom();
    }

    #zoomResolver(num: number): number {
      if (num >= MAX_ZOOM) return MAX_ZOOM;
      else if (num <= MIN_ZOOM) return MIN_ZOOM;
      else return num;
    }

    zoomIn(num: number) {
      setZoom((prev) => this.#zoomResolver(prev + num));
    }

    zoomOut(num: number) {
      setZoom((prev) => this.#zoomResolver(prev - num));
    }
  }
  const logic = new Logic(props.init, image, zoom);

  return (
    <Box sx={rootStyle}>
      <Stack direction="row-reverse" sx={toolbarStyle}>
        <LightboxButton onClick={props.onClose}>
          <CloseIcon sx={{ color: "white" }} />
        </LightboxButton>
        <LightboxButton onClick={() => logic.zoomOut(30)}>
          <ZoomOutIcon sx={{ color: "white" }} />
        </LightboxButton>
        <LightboxButton onClick={() => logic.zoomIn(30)}>
          <ZoomInIcon sx={{ color: "white" }} />
        </LightboxButton>
        <LightboxButton onClick={() => logic.resetZoom()}>
          <RestartAltIcon sx={{ color: "white" }} />
        </LightboxButton>
      </Stack>
      <LightboxButton
        sx={{ ...arrowStyle, left: 20 }}
        onClick={() => logic.getPrevImage()}
      >
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </LightboxButton>
      {props.images.map((src, index) => {
        const initImage = props.init;
        let display = false;

        if (image == null && initImage != null)
          if (initImage === index) display = true;
          else display = false;
        else if (image != null && image === index) display = true;
        else if (index === Number(image)) display = true;

        return (
          <LightboxPic
            key={crypto.randomUUID()}
            src={src}
            show={display}
            zoom={zoom}
          />
        );
      })}
      <LightboxButton
        sx={{ ...arrowStyle, right: 20 }}
        onClick={() => logic.getNextImage()}
      >
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </LightboxButton>
    </Box>
  );
};
