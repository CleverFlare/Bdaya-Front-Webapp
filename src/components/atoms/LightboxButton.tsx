import { FC } from "react";
import { IconButton } from "@mui/joy";
import { SxProps } from "@mui/material";

interface ILightboxButtonProps {
  sx?: SxProps;
  children?: any;
  onClick?: () => void;
}

export const LightboxButton: FC<ILightboxButtonProps> = (props) => {
  const buttonStyle = {
    "&:hover": {
      bgcolor: "transparent",
    },
    "&:active": {
      bgcolor: "transparent",
    },
  };

  return (
    <IconButton
      sx={{ ...buttonStyle, ...(props.sx || {}) }}
      variant="plain"
      onClick={props.onClick}
    >
      {props.children}
    </IconButton>
  );
};
