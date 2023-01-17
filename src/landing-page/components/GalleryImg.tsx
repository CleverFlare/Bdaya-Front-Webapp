import { Box } from "@mui/joy";
import { FC } from "react";
interface IGalleryImgProps {
  src: string;
  onClick?: () => void;
}

export const GalleryImg: FC<IGalleryImgProps> = (props) => {
  const style = {
    objectFit: "cover",
    width: "100%",
    filter: "brightness(1)",
    transition: "300ms",
    cursor: "pointer",
    borderRadius: 10,
    "&:hover": {
      filter: "brightness(0.5)",
    },
  };

  return (
    <Box component="img" src={props.src} sx={style} onClick={props.onClick} />
  );
};
