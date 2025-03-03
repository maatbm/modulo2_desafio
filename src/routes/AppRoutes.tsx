import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, UserPage } from "../pages/index";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
