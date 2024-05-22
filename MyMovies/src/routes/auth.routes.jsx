import { Routes, Route } from "react-router-dom";

// importando as páginas que precisam de autenticação:
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateMovie } from "../pages/CreateMovie";
import { Profile } from "../pages/Profile";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Details />} />
      <Route path="/" element={<CreateMovie />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
