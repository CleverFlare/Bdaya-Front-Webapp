import { FC, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/joy";
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
  const [image, setImage] = useState<number | null>(null);
  const limit = props.images.length - 1;
  const isInitLimited = (props.init || 0) <= limit && (props.init || 0) >= 0;

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

  function getNextImage() {
    setImage((prev) => {
      if (props.loop && (prev || 0) >= limit) return 0;
      else if ((prev || 0) >= limit) return prev;

      if (prev != null) return prev + 1;
      else if (props.init && isInitLimited) return props.init + 1;
      else return 1;
    });
  }

  function getPrevImage() {
    setImage((prev) => {
      if (props.loop && (prev || 0) <= 0) return limit;
      else if ((prev || 0) <= 0) return 0;

      if (prev != null) return prev - 1;
      else if ((props.init || 1) - 1 > 0) return (props.init || 1) - 1;
      else return limit;
    });
  }

  return (
    <Box sx={rootStyle}>
      <Stack spacing={2} sx={toolbarStyle}>
        <LightboxButton onClick={props.onClose}>
          <CloseIcon sx={{ color: "white" }} />
        </LightboxButton>
      </Stack>
      <LightboxButton sx={{ ...arrowStyle, left: 20 }} onClick={getPrevImage}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </LightboxButton>
      {props.images.map((src, index) => {
        const initImage = props.init;
        let display = "none";

        if (image == null && initImage != null && isInitLimited)
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
      <LightboxButton sx={{ ...arrowStyle, right: 20 }} onClick={getNextImage}>
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </LightboxButton>
    </Box>
  );
};
