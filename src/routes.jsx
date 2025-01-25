import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./assets/components/Inicio";
import SobreMim from "./assets/components/SobreMim";
import Menu from "./assets/components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
