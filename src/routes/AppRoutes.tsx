import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, UserPage, Repos } from "../pages/index";
import { RepoContextProvider } from "../contexts/ReposContext";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:username" element={<RepoContextProvider><UserPage /></RepoContextProvider>} />
        <Route path="/:repoID" element={<RepoContextProvider><Repos /></RepoContextProvider>} />
      </Routes>
    </BrowserRouter>
  );
}
