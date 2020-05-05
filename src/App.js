import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./modules/theme";
import { HorairesPage } from "./pages/horaires";
import { ModalHoraires } from "./pages/modalHoraires";
import {
  HorairesContextProvider,
  useHorairesContextSubscriber,
} from "./modules/context/horaires";

function App() {
  const horairesContext = useHorairesContextSubscriber();

  return (
    <ThemeProvider theme={theme}>
      <HorairesContextProvider value={horairesContext}>
        <ModalHoraires />
        <HorairesPage />
      </HorairesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
