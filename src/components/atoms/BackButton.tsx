import { IconButton } from "@mui/joy";
import { FC } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
interface IBackButtonProps {}

export const BackButton: FC<IBackButtonProps> = (props) => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate(-1)}
      color="neutral"
      sx={{ height: "max-content" }}
    >
      <ArrowBackIosNewIcon
        sx={{
          display: "initial",
          [`[dir="rtl"] &`]: {
            display: "none",
          },
        }}
      />
      <ArrowForwardIosIcon
        sx={{
          display: "none",
          [`[dir="rtl"] &`]: {
            display: "initial",
          },
        }}
      />
    </IconButton>
  );
};
