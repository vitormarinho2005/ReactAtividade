import "./Form.css";

import React from "react";

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Seu nome:</label>
                <input type="text"></input>
                <label>Seu email:</label>
                <input type="email"></input>
                <label>Seu assunto:</label>
                <input type="text"></input>
                <label>Sua mensagem:</label>
                <textarea rows="6" placeholder="Digite a sua mensagem aqui"></textarea>
                <button className="btn">Enviar</button>
            </form>
        </div>
    )
}

export default Form;