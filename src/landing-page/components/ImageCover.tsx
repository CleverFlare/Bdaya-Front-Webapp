import { Box } from "@mui/joy";
import { FC } from "react";
interface IImageCoverProps {
  src?: string;
}

export const ImageCover: FC<IImageCoverProps> = (props) => {
  return (
    <Box
      component="img"
      src={props.src}
      sx={{
        width: "100%",
        aspectRatio: "2 / 1",
        bgcolor: "gray",
        borderRadius: 10,
        objectFit: "cover",
      }}
    />
  );
};
