import { FC, useState } from "react";
import { Button, IconButton, Stack } from "@mui/joy";
import { ModeButton } from "../atoms/ModeButton";
import { Topbar } from "../molecules/Topbar";
import { Logo } from "../atoms/Logo";
import { TopbarNavlinks } from "../molecules/TopbarNavlinks";
import { useMediaQuery } from "@mui/material";
import { MD_VIEWPORT } from "../../constants";
import { Show } from "../atoms/Show";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { MobileMenu } from "../molecules/MobileMenu";
import { LangButton } from "../atoms/LangButton";
import { useTranslation } from "react-i18next";
import { ABOUT_US, GALLERY, PROJECTS, TRACKS } from "../../routesPaths";
import { Link } from "react-router-dom";
import { SigninDialog } from "../../landing-page/components/SigninDialog";

interface IAppbarProps {}

export const Appbar: FC<IAppbarProps> = (props) => {
  const { t } = useTranslation();
  const isWideViewport = useMediaQuery(`(min-width: ${MD_VIEWPORT}px)`);

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  function toggleMenu() {
    setOpenMobileMenu((old) => !old);
  }

  const navLinks = [
    { text: t("landing-page.topbar.home"), to: "/" },
    { text: t("landing-page.topbar.about_us"), to: ABOUT_US },
    { text: t("landing-page.topbar.gallery"), to: GALLERY },
    { text: t("landing-page.topbar.tracks"), to: TRACKS },
    { text: t("landing-page.topbar.projects"), to: PROJECTS },
  ];

  const [openSign, setOpenSign] = useState<boolean>(false);

  function handleCloseSign() {
    setOpenSign(false);
  }

  function handleOpenSign() {
    setOpenMobileMenu(false);
    setOpenSign(true);
  }

  return (
    <Topbar isSolid={openMobileMenu}>
      <Stack direction="row" justifyContent="space-between" paddingY={2}>
        <Logo />
        <Show when={isWideViewport}>
          <Stack direction="row" alignItems="center" gap={1}>
            <TopbarNavlinks links={navLinks} />
          </Stack>
          <Stack direction="row" gap={1}>
            <LangButton />
            <ModeButton />
            <Button
              size="md"
              startDecorator={<LoginIcon />}
              onClick={handleOpenSign}
            >
              {t("landing-page.topbar.signin")}
            </Button>
          </Stack>
        </Show>
        <Show when={!isWideViewport}>
          <IconButton variant="outlined" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <MobileMenu
            links={navLinks}
            spread={openMobileMenu}
            onClickOutside={() => toggleMenu()}
            onSignin={handleOpenSign}
          />
        </Show>
      </Stack>
      <SigninDialog open={openSign} onClose={handleCloseSign} />
    </Topbar>
  );
};
