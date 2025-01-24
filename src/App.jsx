import Inicio from "./assets/components/Inicio";
import SobreMim from "./assets/components/SobreMim";

console.log(window.location);

const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
