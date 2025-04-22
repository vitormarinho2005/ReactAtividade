import React from "react";
import "./HeroImg.css";

import HeroBG from "../assets/hero-bg.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="hero-bg" src={HeroBG}/>
            </div>
            <div className="content">
                <p>Oi, eu sou o Vitor.</p>
                <h1>Desenvolvedor React.</h1>
                <div>
                    <Link to="/projetos" className="btn">Projetos</Link>
                    <Link to="/contato" className="btn btn-light">Contato</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
