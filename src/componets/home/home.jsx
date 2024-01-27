import React from "react";
import jsIcon from '../../assets/js.svg'
import './home.css';
import fotoPerfil from '../../assets/foto.jpeg'
import psqlIcon from '../../assets/psql.svg'
import reactIcon from '../../assets/react.svg'
import bootstrapIcon from '../../assets/bootstrap.png'
import dockerIcon from '../../assets/docker.svg'
import gitIcon from '../../assets/git.svg'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'


const Home = () => {
    return (
        <div className="home">
            <aside class="informaçoes">
                <aside class="text">
                    <p>Oi, eu sou o Jonnathan 👋</p>
                    <h2 class="digitando">FRONTEND DEVELOPER</h2>
                    <p className="home-icon">
                        <a href="https://github.com/pjonnathan" target="_blank"><img src={githubIcon} alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/pedro-jonnathan-b070a1265/" target="_blank"><img src={linkedinIcon} alt="linkendin" /></a>
                    </p>
                </aside>
                <img src={fotoPerfil} alt="" />
            </aside>
            <aside class="tecnologias">
                <p>Tech Stock | </p>
                <div className="tecsIcon">
                    <img src={jsIcon} alt="js" />
                    <p>JavaScript</p>
                </div>
                <div className="tecsIcon">
                    <img src={reactIcon} alt="React" />
                    <p>React</p>
                </div>
                <div className="tecsIcon">
                    <img src={bootstrapIcon} alt="Bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div className="tecsIcon">
                    <img src={psqlIcon} alt="Postgres" />
                    <p>PostgresSQL</p>
                </div>
                <div className="tecsIcon">
                    <img src={dockerIcon} alt="Docker" />
                    <p>Docker</p>
                </div>
                <div className="tecsIcon">
                    <img src={gitIcon} alt="Git" />
                    <p>Git</p>
                </div>
            </aside>
        </div>
    )
}

export default Home