import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import About from "../components/About";

const Sobre = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading="SOBRE." text="Eu sou Desenvolvedor Front-End."/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Sobre;