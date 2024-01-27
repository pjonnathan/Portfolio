import React from "react";
import './contato.css';
import imgContatos from '../../assets/imgContato.svg'
import instagramIcon from '../../assets/instagram.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import youtubeIcon from '../../assets/youtube.svg'
import linkedinIcon from '../../assets/linkedin.svg'

const Contato = () => {
    return (
        <div className="contato">
            <div className="contato-main">
                <form action="">
                <h2>FALE <span>COMIGO.</span> NÃO SEJA TÍMIDO</h2>
                    <input type="text" placeholder="Seu Nome..."/>
                    <input type="text" placeholder="Seu Email..."/>
                    <textarea name="" placeholder="Sua mensagem..."></textarea>
                    <div className="btn-enviar"><input type="submit" value="Enviar"/></div>
                </form>
                <img src={imgContatos} alt="" />
            </div>
            <div className="contato-footer">
                <p>Email: <span>jonnathanmatos846@gmail.com</span></p>
                <div className="redes-sociais">
                    <ul className="nav-sociais">
                        <li><a href=""><img src={linkedinIcon} alt="linkendin" /></a></li>
                        <li><a href=""><img src={youtubeIcon} alt="youtube" /></a></li>
                        <li><a href=""><img src={instagramIcon} alt="instagram" /></a></li>
                        <li><a href=""><img src={whatsappIcon} alt="whatsapp" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contato