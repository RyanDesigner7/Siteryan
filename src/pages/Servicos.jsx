import "../styles/Serviços.css"

// App.js
import '../components/heroslide.css'; // Estilo geral da sua aplicação
// icons

import { BsPersonWorkspace } from 'react-icons/bs';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { FaAngleDoubleDown } from 'react-icons/fa';

// img

// componentes
import SpotlightCard from '../components/SpotlightCard';

function Servicos() {
  return <>
    <div className="App">
      < div className="ConeteudoPageWorks" >
        <div >
          <div className="TitlePageWorks">
            <BsPersonWorkspace />
          </div>
          <div>
            <h3 className="abouttitle"><span className="aboutsubtitle">Minhas</span> Skills</h3>
          </div>
        </div>
      </div >
      <div className="Whatworks">

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div>
            <div className="Icon">
              <FaAngleDoubleUp />Hardskills
            </div>
            <ul>
              <li>JavaScript avançado – Criação de lógica, funcionalidades e interatividade em sites.</li>
              <li>React.js / React Router – Desenvolvimento de aplicações SPA modernas.</li>
              <li>HTML5 e CSS3 / Tailwind – Estruturação e estilização de páginas web responsivas.</li>
              <li>Integração com APIs – Conexão com serviços externos, como Stripe ou WhatsApp.</li>
              <li>Design gráfico e UI/UX – Criação de layouts, identidade visual e experiências de usuário.</li>
            </ul>
          </div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div>
            <div className="Icon">
              <FaAngleDoubleDown />Softkills
            </div>
            <ul>
              <li>Resolução de problemas – Capacidade de encontrar soluções rápidas e eficientes.</li>
              <li>Aprendizado contínuo – Facilidade em absorver novas tecnologias e técnicas.</li>
              <li>Criatividade – Ideias inovadoras para design e soluções de desenvolvimento.</li>
              <li>Comunicação clara – Explicação de ideias técnicas para clientes ou equipe.</li>
              <li>Organização e gestão de tempo – Cumprimento de prazos e planejamento de tarefas.</li>
            </ul>
          </div>
        </SpotlightCard>
      </div>
    </div>
  </>
}
export default Servicos