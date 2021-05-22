import React,{useContext} from 'react'
import "../App.css";
import ThemeContext from "../context/ThemeContext"
import ThemeModes from "../Colors"

export default function HeroSection() {

     const theme = useContext(ThemeContext)[0];
     const currentTheme = ThemeModes[theme]; 

    const [mode, setMode] = useContext(ThemeContext);
   

    return (
     
        <div style={{
            padding: "19%",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: 'center' 
        }}>
            <h1>Theme Toggler Using Context API</h1>
            <p>This is a theme toggler app assignment to make the button to toggle the theme from dark to light and vice versa</p>
            <button
                onClick={() => {
                    (mode === "dark") ? setMode("light") : setMode("dark");
            }}
             style={{
                    backgroundColor: "#5A20CB",
                    color: "white",
                    padding: "10px 150px",
                    fontSize: "20px",
                    borderRadius: "10px",
                   border: `${currentTheme.border}`
            }}>{(mode === "light")?" Turn on Dark Mode": "Turn Off "  }</button>
        </div>
    )
}
