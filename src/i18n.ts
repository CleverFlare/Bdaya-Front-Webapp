import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<InitOptions>({
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage", "cookie"],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
