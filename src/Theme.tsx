import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const theme = {
  colors: {
    white: "#FFF",
    black: "#333",
    blue: "#0147AB",
    gray: "#5B5B5B",
    dark_blue: "#002D6B",
    orange: "#FF1D00",
    light_blue: "#E5F3FD",
    light_gray: "#DDDDDD",
  },
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
