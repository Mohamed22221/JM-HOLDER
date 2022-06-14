import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";
import English from "./Components/language/English.json"
import Arabic from "./Components/language/Arabic.json"


const resources = {
  en: {
    translation: English
  },
  ar: {
    translation: Arabic
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false 
    },
    react : {
        useSuspense : false
    }
  });

  export default i18n;