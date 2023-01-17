import { Stack, Typography } from "@mui/joy";
import { FC } from "react";
interface ISectionTitleProps {
  children: any;
}

export const SectionTitle: FC<ISectionTitleProps> = (props) => {
  return (
    <Stack alignItems="center">
      <Typography level="h2">{props.children}</Typography>
    </Stack>
  );
};
