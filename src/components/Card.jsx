import "./Card.css";

import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="pricing">
            <div className="card-container"> 
                <div className="card">
                    <h3>- Básico -</h3>
                    <span className="bar"></span>
                    <p className="btc">R$ 100</p>
                    <p>- 3 Dias -</p>
                    <p>- 3 Páginas -</p>
                    <p>- Destaque -</p>
                    <p>- Design Responsivo -</p>
                    <Link to="/contato" className="btn">
                        COMPRE AGORA
                    </Link>
                </div>
                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">R$ 200</p>
                    <p>- 2 Dias -</p>
                    <p>- 5 Páginas -</p>
                    <p>- Destaque -</p>
                    <p>- Design Responsivo -</p>
                    <Link to="/contato" className="btn">
                        COMPRE AGORA
                    </Link>
                </div>
                <div className="card">
                    <h3>- Business -</h3>
                    <span className="bar"></span>
                    <p className="btc">R$ 300</p>
                    <p>- 5 Dias -</p>
                    <p>- 8 Páginas -</p>
                    <p>- Destaque -</p>
                    <p>- Design Responsivo -</p>
                    <Link to="/contato" className="btn">
                        COMPRE AGORA
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;