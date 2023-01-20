import i18next from "i18next";
import { IconButton } from "@mui/joy";
import { FC } from "react";
interface ILangButtonProps {}

export const LangButton: FC<ILangButtonProps> = (props) => {
  function toggleLang() {
    switch (i18next.language) {
      case "en":
        document.body.setAttribute("dir", "rtl");
        i18next.changeLanguage("ar");
        break;
      case "ar":
        document.body.setAttribute("dir", "ltr");
        i18next.changeLanguage("en");
        break;
    }
  }

  return (
    <IconButton onClick={toggleLang}>
      {i18next.language === "en" ? "AR" : "EN"}
    </IconButton>
  );
};
