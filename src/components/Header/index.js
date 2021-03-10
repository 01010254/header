import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

import HeaderPesquisa from './HeaderPesquisa';

import Phone from "../../img/phone.svg";
import Whats from "../../img/whats.svg";



function Header(){
  return(
    <header id="main-header">
        <div className="header-box">
            <div className="header-content">
            
                <div className="header-phones">            
                    <Link to="/">
                    <img src={Phone}/>
                    <p>(51)9 9920 0350</p>
                    </Link>
                    <Link to="/">
                    <img src={Whats}/>
                    <p className="header-last">(51)9 9920 0350</p>
                    </Link>
                </div>
                <div className="header-opcoes">
                    <Link to="/">
                    <p>LISTA DE DESEJOS</p>
                    </Link>
                    <Link to="/">
                    <p>FALE CONOSCO</p>
                    </Link>
                    <Link to="/">
                    <p className="header-last">TROCAS E DEVOLUÇÕES</p>
                    </Link>
                </div>
            </div>
        
      </div>
      <HeaderPesquisa/>
    </header>
  );
}

export default Header;