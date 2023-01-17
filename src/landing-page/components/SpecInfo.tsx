import { Stack, Typography } from "@mui/joy";
import { FC } from "react";
interface ISpecInfoProps {
  title: string;
  children: string;
}

export const SpecInfo: FC<ISpecInfoProps> = (props) => {
  return (
    <Stack spacing={2}>
      <Typography level="h3" fontWeight="bold">
        {props.title}
      </Typography>
      <Typography>{props.children}</Typography>
    </Stack>
  );
};
