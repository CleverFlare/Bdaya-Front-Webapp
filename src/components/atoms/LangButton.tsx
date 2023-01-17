import i18next from "i18next";
import { IconButton } from "@mui/joy";
import { FC, useEffect, useState } from "react";
interface ILangButtonProps {}

export const LangButton: FC<ILangButtonProps> = (props) => {
  const [isEn, setIsEn] = useState<boolean>(
    i18next.language === "en" ? true : false
  );

  function toggleLang() {
    setIsEn(i18next.language === "en" ? true : false);
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

  return <IconButton onClick={toggleLang}>{isEn ? "AR" : "EN"}</IconButton>;
};
