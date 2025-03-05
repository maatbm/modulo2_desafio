import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  Theme from "./Theme.tsx";
import { GlobalStyle } from "./GlobalStyles.ts"; 
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </StrictMode>
);
