import React from "react";
import './portifolio.css';

const Portifolio = () => {
    return (
        <div className="portifolio">
            <h1>PROJETOS</h1>
            <p id="ptitulo">Projetos que trabalhei</p>
            <div className="top">
                <a href="https://pjonnathan.github.io/previs-o_de_tempo/">
                    <div className="project um">
                        <p>Previsão de Tempo</p>
                        <h2>React • API</h2>
                    </div>
                </a>
                <a href="https://pjonnathan.github.io/PID2024/">
                    <div className="project dois">
                        <p>Todo List</p>
                        <h2>Todo-List • LocalStorage</h2>
                    </div>
                </a>
            </div>
            <div className="bottom">
                <a href="https://pjonnathan.github.io/Ecommerce/">
                    <div className="project tres">
                        <p>Ecommerce</p>
                        <h2>React • Ecommerce</h2>
                    </div>
                </a>
                <a href="https://pjonnathan.github.io/LandingPage---Agencia/">
                    <div className="project quatro">
                        <p>Landing Page</p>
                        <h2>Landing Page • JavaScript</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Portifolio