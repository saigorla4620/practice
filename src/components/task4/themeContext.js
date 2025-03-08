import { createContext, useState } from "react";


export const colorContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("#ffffff"); 

  const changeColor = (newColor) => {
    setColor(newColor);
    
  };

  <colorContext.Provider value={{color,changeColor}}>
  {children}
  </colorContext.Provider>
}