import { Sheet, Stack } from "@mui/joy";
import Lottie from "lottie-react";
import loadingAnimation from "../../lotties/loading.json";
import { FC } from "react";
interface ILoadingProps {}

export const Loading: FC<ILoadingProps> = (props) => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  return (
    <Sheet
      component={Stack}
      justifyContent="center"
      alignItems="center"
      sx={style}
    >
      <Lottie animationData={loadingAnimation} loop />
    </Sheet>
  );
};
