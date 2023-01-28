import i18next from "i18next";
import { useEffect } from "react";

function useDynamicTranslation() {
  return function (ar: any, en: any) {
    switch (i18next.language) {
      case "ar":
        return ar;
      case "en":
        return en;
      default:
        return en;
    }
  };
}

export default useDynamicTranslation;
