import { Button, Divider, Sheet, Stack } from "@mui/joy";
import { FC } from "react";
import { ModeButton } from "../atoms/ModeButton";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import { LangButton } from "../atoms/LangButton";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { SIGNIN } from "../../routesPaths";

interface IMobileMenuProps {
  links: { text: string; to: string }[];
  spread: boolean;
  onClickOutside?: () => void;
  onSignin?: () => void;
}

export const MobileMenu: FC<IMobileMenuProps> = (props) => {
  const location = useLocation();
  const { t } = useTranslation();
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    padding: 2,
    boxSizing: "border-box",
    boxShadow: "lg",
    transform: props.spread ? "scaleY(1)" : "scaleY(0)",
    transformOrigin: "top",
    transition: "300ms",
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        pointerEvents: props.spread ? "all" : "none",
      }}
    >
      <Sheet sx={style}>
        {props.links.map((navLink) => {
          const isSelected = location.pathname === navLink.to;
          const variant = isSelected ? "soft" : "plain";
          return (
            <Button
              component={Link}
              to={navLink.to}
              variant={variant}
              color="neutral"
              key={crypto.randomUUID()}
              onClick={() => props.onClickOutside && props.onClickOutside()}
            >
              {navLink.text}
            </Button>
          );
        })}
        <Divider orientation="horizontal"></Divider>
        <Stack direction="row-reverse" gap={2}>
          <LangButton />
          <ModeButton />
          <Button
            startDecorator={<LoginIcon />}
            fullWidth
            onClick={props.onSignin}
          >
            {t("landing-page.topbar.signin")}
          </Button>
        </Stack>
      </Sheet>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100vh - 72px)",
          backgroundColor: "rgba(255,2550,255, 0.5)",
          transition: "300ms",
          transitionProperty: "opacity, visibility",
          backdropFilter: "blur(10px)",
          opacity: props.spread ? 1 : 0,
          zIndex: -1,
          visibility: props.spread ? "visible" : "hidden",
          pointerEvents: props.spread ? "all" : "none",
        }}
        onClick={props.onClickOutside}
      />
    </Box>
  );
};
