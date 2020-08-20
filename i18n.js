import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/en/translation.json";
import translationCh from "./locales/ch/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: translationEng,
      },
      ch: {
        translations: translationCh,
      },
    },

    fallbackLng: "en",
    debug: true,
    lng: "en",

    // common namespace used ard app
    ns: ["transactions"],
    defaultNS: "translations",

    keySeparator: false, // use content as keys

    interpolation: {
      escapeValue: false, // not required for react
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },
  });

export default i18n;
