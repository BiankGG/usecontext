import "./App.css"; // Archivo de estilos CSS
import React, { useState } from "react";
import { ThemeProvider } from "./components/theme/ThemeContext";
import RoutesTheme from "./components/routes/RoutesApp";

const App = () => {
  return (
    <ThemeProvider>
      <section>
        <main>
          <RoutesTheme />
        </main>
      </section>
    </ThemeProvider>
  );
};

export default App;
