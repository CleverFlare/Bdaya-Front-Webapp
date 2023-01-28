import { Stack, Typography } from "@mui/joy";
import { SxProps } from "@mui/material";
import { FC, ReactNode } from "react";
interface ISpecInfoProps {
  title: string;
  children: string | ReactNode | ReactNode[];
  sx?: SxProps;
}

export const SpecInfo: FC<ISpecInfoProps> = (props) => {
  return (
    <Stack spacing={1} sx={props.sx}>
      <Typography level="h3" fontWeight="bold">
        {props.title}
      </Typography>
      <Typography component="div">{props.children}</Typography>
    </Stack>
  );
};
