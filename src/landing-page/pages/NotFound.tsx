import { FC } from "react";
import { Box, Stack } from "@mui/joy";
import Lottie from "lottie-react";
import NotFoundAnimation from "../../lotties/404.json";

interface INotFoundProps {}

export const NotFound: FC<INotFoundProps> = (props) => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
      <Box component={Lottie} animationData={NotFoundAnimation} loop />
    </Stack>
  );
};
