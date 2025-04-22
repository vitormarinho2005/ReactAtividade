import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroImg";
import Footer from "../components/Footer";
import CardWork from "../components/CardWork";

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <CardWork/>
            <Footer/>
        </div>
    )
}

export default Inicio;