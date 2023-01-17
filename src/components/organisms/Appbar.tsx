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
import { ABOUT_US, GALLERY, PROJECTS, TRACKS, SIGNIN } from "../../routesPaths";
import { Link } from "react-router-dom";

interface IAppbarProps {}

export const Appbar: FC<IAppbarProps> = (props) => {
  const { t } = useTranslation();
  const isWideViewport = useMediaQuery(`(min-width: ${MD_VIEWPORT}px)`);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
              component={Link}
              to={SIGNIN}
              size="md"
              startDecorator={<LoginIcon />}
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
          />
        </Show>
      </Stack>
    </Topbar>
  );
};

/* .css-1i7s5ah-JoyButton-root {
  --Icon-margin: initial;
  --CircularProgress-size: var(--Icon-fontSize);
  --Icon-fontSize: 1.5rem;
  --Button-gap: 0.5rem;
  min-height: var(--Button-minHeight, 2.5rem);
  font-size: var(--joy-fontSize-sm);
  padding-block: 0.25rem;
  padding-inline: 1rem;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--Button-radius, var(--joy-radius-sm));
  margin: var(--Button-margin);
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: var(--joy-fontFamily-body);
  font-weight: var(--joy-fontWeight-lg);
  line-height: 1;
  --variant-borderWidth: 0px;
  color: var(--joy-palette-primary-solidColor);
  background-color: var(--joy-palette-primary-solidBg);
} */

/* .css-1i7s5ah-JoyButton-root {
  --Icon-margin: initial;
  --CircularProgress-size: var(--Icon-fontSize);
  --Icon-fontSize: 1.5rem;
  --Button-gap: 0.5rem;
  min-height: var(--Button-minHeight, 2.5rem);
  font-size: var(--joy-fontSize-sm);
  padding-block: 0.25rem;
  padding-inline: 1rem;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--Button-radius, var(--joy-radius-sm));
  margin: var(--Button-margin);
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: var(--joy-fontFamily-body);
  font-weight: var(--joy-fontWeight-lg);
  line-height: 1;
  --variant-borderWidth: 0px;
  color: var(--joy-palette-primary-solidColor);
  background-color: var(--joy-palette-primary-solidBg);
} */
