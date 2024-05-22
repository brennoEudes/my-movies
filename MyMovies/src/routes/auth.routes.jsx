import { Routes, Route } from "react-router-dom";

// importando as páginas que precisam de autenticação:
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateMovie } from "../pages/CreateMovie";
import { Profile } from "../pages/Profile";

export function AuthRoutes() {
  return (
    <Routes>
      {/* Envolve todas as rotas */}
      <Route path="/" element={<Home />} />{" "}
      {/* P/ cada rota, informamos o endereço e o q será renderizado! */}
      <Route path="/" element={<Details />} /> {/* precisa do cód da nota, por isso add ":id" */}
      <Route path="/" element={<CreateMovie />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
