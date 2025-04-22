import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Card from "../components/Card";
import CardWork from "../components/CardWork";

const Projetos = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading="PROJETOS." text="Esse são os trabalhos recentes"/>
            <CardWork/>
            <Card/>
            <Footer/>
        </div>
    )
};

export default Projetos;