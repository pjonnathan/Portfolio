import React from "react";
import './navbar.css';
import home from '../../assets/Home.svg'
import user from '../../assets/User.svg'
import project from '../../assets/project.svg'
import chat from '../../assets/Chat.svg'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Pedro.dev</h1>
            <div className="menuNavbar">
                <Link className="menuNavbarItem" activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}><img src={home} alt="Home" /></Link>
                <Link className="menuNavbarItem" activeClass="active" to="sobremim" spy={true} smooth={true} offset={-100} duration={500}><img src={user} alt="Sobre mim" /></Link>
                <Link className="menuNavbarItem" activeClass="active" to="portifolio" spy={true} smooth={true} offset={-50} duration={500}><img src={project} alt="Portifolio" /></Link>
                <Link className="menuNavbarItem" activeClass="active" to="contato" spy={true} smooth={true} offset={-1} duration={500}><img src={chat} alt="Contrateme" /></Link>
            </div>
        </nav>
    )
}

export default Navbar