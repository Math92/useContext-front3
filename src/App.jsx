import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage((prevLanguage) => {
      // Lógica para cambiar entre inglés, español y portugués
      if (prevLanguage.id === "EN") return languages.spanish;
      if (prevLanguage.id === "ES") return languages.portuguese;
      return languages.english;
    });
  }

  return (
    <LanguageContext.Provider value={{ language, handleChangeLA }}>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </LanguageContext.Provider>
  )
}

export default App