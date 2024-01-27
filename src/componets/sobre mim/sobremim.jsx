import React from "react";
import './sobremim.css';
import imgSobremim from '../../assets/sobremim.png'

const Sobremim = () => {
    return (
        <div className="sobremim">
            <img src={imgSobremim} alt="Img Sobre mim" />
            <aside class="infor-sobre">
                <h2 class="titulo">SOBRE MIM</h2>
                <h2 class="decricao">Dedicação ao Desenvolvimento Front-End</h2>
                <p>
                    Olá! Sou um entusiasta da programação com 21 anos de idade. Ingressei no mundo da codificação em 2017, iniciando minha jornada com Python, onde desenvolvi habilidades sólidas em lógica e algoritmos. Mais tarde, explorei a programação orientada a objetos (POO) através de Java. <br />

                    Ao longo dessa trajetória, descobri minha paixão pelo desenvolvimento front-end, onde concentro meus esforços atualmente. Além do universo da programação, sou um amante de esportes, encontrando desafios no futebol, xadrez e basquete.
                </p>
            </aside>
        </div>
    )
}

export default Sobremim