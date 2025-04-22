import "./About.css";

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h1>Quem sou eu?</h1>
                <p>Eu sou desenvolvedor front-end. 
                Eu crio sites responsivos para meus clientes.</p>
                <Link to="/contato">
                    <button className="btn">Contato</button>
                </Link>
            </div>
        </div>
    )
}

export default About;