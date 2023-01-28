import i18next from "i18next";

interface LangSpecs {
  ar: string;
  en: string;
}

function useDynamicTranslation() {
  return function (specs: LangSpecs) {
    switch (i18next.language) {
      case "ar":
        return specs.ar;
      case "en":
        return specs.en;
    }
  };
}

export default useDynamicTranslation;
