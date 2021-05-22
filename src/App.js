import React, {useState}from 'react'
import ThemeContext from "./context/ThemeContext"
import HeroSection from "./components/HeroSection"


export default function App() {

  const themeHook= useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <HeroSection />
    </ThemeContext.Provider>
  )
}
