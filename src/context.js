import { createContext } from 'react';
import EN from "./languages/english.json"
import ES from "./languages/spanish.json"
import PTBR from "./languages/portuguese.json"

export const languages = {
  english: {
    id: "EN",
    text: EN
  },
  spanish: {
    id: "ES", 
    text: ES
  },
  portuguese: {
    id: "PTBR",
    text: PTBR
  }
};

// Crear el contexto con un valor inicial
const LanguageContext = createContext({
  language: languages.english,
  handleChangeLA: () => {}
});

export default LanguageContext;