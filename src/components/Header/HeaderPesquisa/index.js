import React from 'react';
import {Link} from 'react-router-dom';
import './headerPesquisa.css';
import Logo from "../../../img/logo.svg";
import Seta from "../../../img/chevron-down.svg";
import Path from "../../../img/Path1.svg";





function HeaderPesquisa(){
    let upClass = 'toggle-up';
    let downClass = 'toggle-down';
    let toggleNone = 'toggle-none';
    let toggleInline = 'toggle-inline';

function toggle() {
  let square = document.querySelector('.div-entrar');
  let squareDisplay = document.querySelector('.toggle-div');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
    squareDisplay.className = squareDisplay.className.replace(toggleInline, toggleNone);

   
  } else {
        square.className = square.className.replace(upClass, downClass);
        squareDisplay.className = squareDisplay.className.replace(toggleNone, toggleInline);


        

  }
  
}


    return(
        <div className="header-pesquisa">
            <div>
            <img src={Logo}/>
            </div>
            <div className="width-pesquisar">
                <div className="div-pesquisar">
                    <form name="FormBusca" id="FormBusca" method="post" >
                        <input type="text" name="Busca" id="Busca" placeholder="O que você está procurando?" className="pesquisar"/>
                    </form>
                </div>
            </div>
            <div className="div-entrar toggle-up " onClick={toggle}>
                <p>Entrar <img className="seta" src={Seta}/></p>
                <div className="toggle-div toggle-none">
                <Link to="/">
                    Minha conta
                </Link>
                <Link to="/">
                    Minha conta
                </Link>
                <Link to="/">
                    Minha conta
                </Link>

                </div>
            </div>
            <div className="div-path">
            <div className="path">
            <img  src={Path}/>
            
            </div>
            <div className="number">
                <p>+37</p>
            </div>
            </div>

            
        </div>
    );
  }
  
  export default HeaderPesquisa;