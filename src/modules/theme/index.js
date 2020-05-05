import { ThemeContext, createGlobalStyle } from "styled-components";
import { useContext } from "react";

export const theme = {
  colors: {
    primary: "#4AD7FC",
    grey: "#747688",
    "grey-dark": "#444444",
    blue: "#1DCDFC",
    rose: "#FFC6BD",
    "dark-blue": "#1c1e38",
    light: "#f4f5fd",
    "primary-light": "#f4f5fd",
    yellow: "#ffedbd",
    "primary-dark": "#172b49",
    "primary-grey": "#8b95a5",
    bg: "#f4f5fd",
    dark: "#172b49",
    danger: "#FF2E48",
    accent: " #4AD7FC",
  },
  container: {
    "container-width": "1060px",
    "container-large-width": "1160px",
    "container-search-result": "982px",
  },
  radius: {
    "radius-small": "4px",
    "radius-medium": "8px",
    "radius-big": "16px",
  },
  fonts: {
    title: "Aldrich",
  },
};

export function useAppTheme() {
  return useContext(ThemeContext);
}

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background: ${(props) => props.theme.colors.light};
    font-family: sans-serif;
  }
`;

const breakpoints = {
  startTablet: 700,
  startDesktop: 1100,
};

export const mq = {
  phone: `max-width: ${breakpoints.startTablet - 1}px`,
  tablet: `min-width: ${breakpoints.startTablet}px) and (max-width: ${
    breakpoints.startDesktop - 1
  }px`,
  desktop: `min-width : ${breakpoints.startDesktop}px`,
  uptoTablet: `max-width: ${breakpoints.startDesktop - 1}px`,
  fromTablet: `min-width: ${breakpoints.startTablet}px`,
};
