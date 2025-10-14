import "../styles/Home.css"

// App.js
import React from 'react';
import '../components/heroslide.css'; // Estilo geral da sua aplicação
// icons

import { FaListCheck } from 'react-icons/fa6';
// img


// componentes

import Formulario from "../components/Form"; // caminho relativo correto

function Contato() {
  return <>
    <div className="App">
      <div>
        <div className="TitlePageOrça">
          <div>
            <div className="Icon">
              <FaListCheck />
            </div>
          </div>

          <div>
            <h3 className="abouttitle"><span className="aboutsubtitle">TIRE SUA</span> DÚVIDA</h3>
          </div>
        </div>
        <Formulario />
      </div>
    </div>
  </>
}
export default Contato