import React from "react";
import './portifolio.css';

const Portifolio = () => {
    return (
        <div className="portifolio">
            <div className="top">
                <div className="project">
                    <p>Clone ChatGPT</p>
                    <h2>React • API</h2>
                </div>
                <div className="project">
                    <p>Previsão de Tempo</p>
                    <h2>React • API</h2>
                </div>
            </div>
            <div className="bottom">
                <div className="project">
                    <p>Projeto 1</p>
                    <h2>PostgresSQL • Doker</h2>
                </div>
                <div className="project">
                    <p>Projeto 2</p>
                    <h2>React • API</h2>
                </div>
            </div>
        </div>
    )
}

export default Portifolio