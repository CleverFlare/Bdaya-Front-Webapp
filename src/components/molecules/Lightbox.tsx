import { FC, useState } from "react";
import { Box, Stack } from "@mui/joy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { LightboxButton } from "../atoms/LightboxButton";

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
  const [image, setImage] = useState<number | null>(null);

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
  };
  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };
  const toolbarStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 1,
  };

  //======= logic =======
  type NumberOrNullish = number | null | undefined;

  class Logic {
    constructor(
      private propVal: NumberOrNullish,
      private stateVal: NumberOrNullish
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

    getNextImage() {
      const prevVal = this.#sourceSwitcher();
      const nextVal = prevVal + 1;
      this.#limitGate(nextVal, prevVal);
    }

    getPrevImage() {
      const prevVal = this.#sourceSwitcher();
      const nextVal = prevVal - 1;
      this.#limitGate(nextVal, prevVal);
    }
  }
  const logic = new Logic(props.init, image);

  return (
    <Box sx={rootStyle}>
      <Stack spacing={2} sx={toolbarStyle}>
        <LightboxButton onClick={props.onClose}>
          <CloseIcon sx={{ color: "white" }} />
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
        let display = "none";

        if (image == null && initImage != null)
          if (initImage === index) display = "block";
          else display = "none";
        else if (image != null && image === index) display = "block";
        else if (index === Number(image)) display = "block";

        return (
          <Box
            key={crypto.randomUUID()}
            component="img"
            src={src}
            sx={{ maxWidth: "100%" }}
            style={{ display }}
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
