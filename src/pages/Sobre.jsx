
import "../styles/Sobre.css"

// App.js
import React from 'react';

import '../components/heroslide.css'; // Estilo geral da sua aplicação
// icons
import { MdLocationCity } from 'react-icons/md';

// img
import img from "../assets/quipecartoon.png"


function Sobre() {
  return <>

    <div className="App">
      <div className="ConteudoPageHome">
        <div className="TitlePageHome">
          <div>
            <MdLocationCity />
          </div>
          <div>
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
    </div>
  </>
}
export default Sobre