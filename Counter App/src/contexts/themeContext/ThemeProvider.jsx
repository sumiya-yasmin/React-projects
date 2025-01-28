import { useState } from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({children})=>{
   
    const [theme, setTheme] = useState(false);
    const toggleTheme = () =>{
      setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}