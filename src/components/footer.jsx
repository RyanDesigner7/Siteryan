import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <h2>/&gt; SANT</h2>
                    <p>Transformando ideias em resultados.</p>
                </div>

                <div className="footer-links">
                    <h3>Links Rápidos</h3>
                    <ul>

                        <li><a href="#abouttitle"> Home</a></li>
                        <li><a href="#ConteudoPageHome"> Sobre</a></li>
                        <li><a href="#ConeteudoPageWorks"> Serviços</a></li>
                        <li><a href="#TitlePageOrça"> Contato</a></li>


                    </ul>
                </div>

                <div className="footer-contato">
                    <h3>Contato</h3>
                    <p><strong>Email:</strong> contato@sant.com.br</p>
                    <p><strong>WhatsApp:</strong> (11) 99798-6454</p>
                </div>
            </div>

            <div className="footer-copy">
                <p>© 2025 SANT  — Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
