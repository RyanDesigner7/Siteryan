import React from 'react';
import Slider from 'react-slick';

// É crucial importar os arquivos de CSS da biblioteca para que o estilo funcione
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Vamos criar um arquivo de CSS para o nosso componente específico
import '../components/heroslide.css';

// Importe as imagens que você vai usar. Coloque-as na pasta `src` ou `public`.
import truckImage1 from '../assets/Bg.png'; // Exemplo: crie uma pasta 'assets' em 'src'
import truckImage2 from '../assets/Bg.png';
import truckImage3 from '../assets/Bg.png';


const HeroSlider = () => {
    // Configurações do slider
    const settings = {
        dots: true,           // Mostra os pontinhos de navegação
        infinite: true,       // O slider volta para o primeiro item depois do último
        speed: 500,           // Velocidade da transição em milissegundos
        slidesToShow: 1,      // Quantos slides mostrar de uma vez
        slidesToScroll: 1,    // Quantos slides rolar por vez
        autoplay: true,       // O slider passa automaticamente
        autoplaySpeed: 3000,  // Tempo para passar para o próximo slide
        arrows: true,         // Mostra as setas de navegação
    };

    const slidesData = [
        {
            image: truckImage1,
            title: "Criatividade Própria!",
            subtitle: "Transformamos suas ideias em designs únicos e impactantes.",
        },
        {
            image: truckImage2,
            title: "Comunicação Eficiente",
            subtitle: "Estratégias de marketing que conectam sua marca ao público certo.",
        },
        {
            image: truckImage3,
            title: "Resultados Reais",
            subtitle: "Campanhas inteligentes que aumentam visibilidade e engajamento.",
        }
    ];

    return (
        <div className="hero-slider-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="slide-item"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="slide-overlay"></div> {/* Camada escura */}
                            <div className="slide-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlider;