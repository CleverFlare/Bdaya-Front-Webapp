import { FC } from "react";
import { Box } from "@mui/system";
interface ILogoProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

export const Logo: FC<ILogoProps> = (props) => {
  const style = {
    height: props.size || props.height || 40,
    width: props.size || props.width || "unset",
  };
  return <Box component="img" src="Bdaya Logo 1.png" sx={style} />;
};
