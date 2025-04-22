import React from "react";
import "./index.css";
import Inicio from "./routes/Inicio";
import Sobre from "./routes/Sobre";
import Projetos from "./routes/Projetos";
import Contato from "./routes/Contato";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;
