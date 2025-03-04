import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, UserPage } from "../pages/index";
import { RepoContextProvider } from "../contexts/ReposContext";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:username" element={<RepoContextProvider><UserPage /></RepoContextProvider>} />
      </Routes>
    </BrowserRouter>
  );
}
