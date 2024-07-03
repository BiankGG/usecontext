// Aquí estará nuestro contexto y donde haremos los cambios de estado.
//  Debemos comenzar con un estado de light que al pulsar cambiará a dark

import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value= {{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
