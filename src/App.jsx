import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { CadastroAgendamento } from "./pages/CadastroAgendamento.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroAgendamento />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
