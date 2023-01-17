import { FC } from "react";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../lotties/coming-soon.json";
import { Box, Stack } from "@mui/joy";
interface IComingSoonProps {}

export const ComingSoon: FC<IComingSoonProps> = (props) => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
      <Box component={Lottie} animationData={comingSoonAnimation} loop />
    </Stack>
  );
};
