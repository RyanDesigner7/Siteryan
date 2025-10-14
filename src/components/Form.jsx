import React, { useState } from "react";
import "../components/Forms.css";

export default function FormularioWhatsApp() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const numeroWhatsApp = "5511997986454"; // sem o +

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
        setNome("");
        setEmail("");
        setMensagem("");
    };

    return (
        <form className="form-whatsapp" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
            />
            <button type="submit">Enviar via WhatsApp</button>
        </form>
    );
}
