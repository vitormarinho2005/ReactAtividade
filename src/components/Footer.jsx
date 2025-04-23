import React from "react";
import "./Footer.css";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                    <div>
                        <p>255, Rua Gov. Celso Ramos</p>
                        <p>Brasil</p>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>98464-1072</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />vitor@email.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>Sobre a agência</h4>
                    <p>Esse é o Vitor Marinho, CEO & Fundador da Agência VTR, 
                        eu gosto de fazer design e novos projetos.</p>
                    <div className="social">
                        <a href="https://pt-br.facebook.com/" target="blank">
                            <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://x.com/" target="blank">
                            <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://br.linkedin.com/" target="blank">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;