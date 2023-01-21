import { Box } from "@mui/joy";
import { FC } from "react";
interface ILightboxPicProps {
  src: string;
  show: boolean;
  zoom?: number;
}

export const LightboxPic: FC<ILightboxPicProps> = (props) => {
  const isDisplayed = props.show;
  const rootStyle = {
    minWidth: "0px",
    maxWidth: "1000px",
    display: isDisplayed ? "block" : "none",
    transform: `scale(${(props.zoom || 0) / 100 + 1})`,
  };
  return <Box component="img" src={props.src} sx={rootStyle} />;
};
