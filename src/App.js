// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

import { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
const [mode, setMode] = useState(theme.light)

// const lightMode = () => {setMode(theme.light)}

// const darkMode = () => {setMode(theme.dark)

const toSwitch = () => {
  if(mode === theme.light) {setMode(theme.dark)}
  else{ {setMode(theme.light)}
}
  //console.log(mode);
}

//localStorage.toSwitch
//console.log(mode);

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <ThemeButton onClick={toSwitch}>
      {mode===theme.light ? "Dark mode":"Light mode"}
      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
