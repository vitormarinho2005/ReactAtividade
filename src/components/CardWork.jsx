import "./CardWork.css";

import React from "react";
import iq from "../assets/imagem-quebrada.png";
import { NavLink } from "react-router-dom";

const CardWork = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projetos</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={iq}/>
                    <h2 className="project-title">Projeto 1 - NÃO ABRA</h2>
                    <div className="project-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="project-btns">
                            <NavLink to="#" className="btn">Ver</NavLink>
                            <NavLink to="#" className="btn">Sobre</NavLink>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={iq}/>
                    <h2 className="project-title">Projeto 2 - NÃO ABRA</h2>
                    <div className="project-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="project-btns">
                            <NavLink to="#" className="btn">Ver</NavLink>
                            <NavLink to="#" className="btn">Sobre</NavLink>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={iq}/>
                    <h2 className="project-title">Projeto 3 - NÃO ABRA</h2>
                    <div className="project-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="project-btns">
                            <NavLink to="#" className="btn">Ver</NavLink>
                            <NavLink to="#" className="btn">Sobre</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWork;