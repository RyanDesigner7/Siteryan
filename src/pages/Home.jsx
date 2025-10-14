import { h1 } from "motion/react-client"


// App.js
import React from 'react';
import HeroSlider from '../components/heroslide'; // Importe o componente que criamos
import '../components/heroslide.css'; // Estilo geral da sua aplicação
// icons
import { MdLocationCity } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import { AiOutlineInbox } from 'react-icons/ai';
import { WiCloudDown } from 'react-icons/wi';
import { FaListCheck } from 'react-icons/fa6';
// img
import img from "../assets/quipecartoon.png"
import "../styles/Home.css"
// componentes
import SpotlightCard from '../components/SpotlightCard';
import Formulario from "../components/Form"; // caminho relativo correto
import Formacao from "../components/informacaoForm"; // caminho relativo correto
function App() {

  return (
    <div className="App">
      <HeroSlider />
      <div id="ConteudoPageHome"></div>
      {/* SOBRE NOS */}
      <div className="ConteudoPageHome">
        <div className="TitlePageHome">
          <div>
            <MdLocationCity />
          </div>
          <div >
            <h3 className="abouttitle"><span className="aboutsubtitle">Sobre</span> Mim</h3>
          </div>
        </div>
      </div>
      <div className="Paragraphs">
        <div className="AboutTexts">
          <br />
          Na Brothers Studios, unimos criatividade, estratégia e tecnologia para dar vida às ideias e transformar marcas em experiências marcantes.
          Somos uma equipe apaixonada por resultados, inovação e design inteligente.
          <br />
          👨‍💻 Ryan — Desenvolvedor
          Responsável por transformar conceitos em realidade digital. Cuida de toda a parte técnica, garantindo sites modernos, rápidos e funcionais.
          <br />
          💼 Aghata — Marketing
          Especialista em planejar e executar estratégias criativas que fortalecem a presença das marcas no ambiente digital.
          <br />
          📈 Junior — Marketing
          Focado em campanhas, engajamento e performance, transforma dados em resultados concretos.
          <br />
          🤝 Denis — Negociador
          O elo entre a equipe e o cliente. Garante parcerias sólidas, transparência e a melhor experiência em cada projeto.
          <br />
        </div>
        <img className="imgAboutBusness" src={img} alt="" />
      </div >

      {/* OQUE FAZEMOS */}
      <div id="ConeteudoPageWorks"></div>
      < div className="ConeteudoPageWorks" >
        <div >
          <div className="TitlePageWorks">
            <BsPersonWorkspace />
          </div>
          <div>
            <h3 className="abouttitle"><span className="aboutsubtitle">oque</span> Fazemos</h3>
          </div>
        </div>
      </div >
      <div className="Whatworks">

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.38)">
          <div>
            <div className="Icon">
              <WiCloudDown />Digital
            </div>
            <ul>
              <li>Design digital e identidade visual.</li>
              <li>Desenvolvimento de sites e sistemas web.</li>
              <li>Marketing digital.</li>
              <li>Website Informativo.</li>
              <li>Gestão de redes sociais.</li>
            </ul>
          </div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.38)">
          <div>
            <div className="Icon">
              <AiOutlineInbox />fisico
            </div>
            <ul>
              <li>Cartao de visita.</li>
              <li>banner.</li>
              <li>brindes Personalizados.</li>
              <li>Folders e panfletos.</li>
              <li>Adesivos e rótulos personalizados.</li>
            </ul>
          </div>
        </SpotlightCard>
      </div>

      {/* CONTATO */}
      <div>
        <div id="TitlePageOrça" className="TitlePageOrça">
          <div>
            <div className="Icon">
              <FaListCheck />
            </div>
          </div>

          <div>
            <h3 className="abouttitle"><span className="aboutsubtitle">TIRE SUA</span> DÚVIDA</h3>
          </div>
        </div>
        <div className="inf">
          <Formacao />
          <div className="Line"></div>
          <Formulario />
        </div>
      </div>
    </div >
  );
}

export default App; 