import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./assets/components/Inicio";
import SobreMim from "./assets/components/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
