import { FC } from "react";
import { IconButton, useColorScheme } from "@mui/joy";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ModeButton: FC = () => {
  const { mode, setMode } = useColorScheme();

  function toggleMode(): void {
    setMode(mode === "light" ? "dark" : "light");
  }
  return (
    <IconButton variant="outlined" onClick={toggleMode}>
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
