/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import { Link } from "react-router-dom";

//generation du menu a partir des composant "Nav" & "Logo"
const Menu = ({ openMenu }) => (
  <div css={styles} className={openMenu ? "menu" : "hidden"}>
    <a href="#Acceuil">Accueil</a>
    <a href="#A propos">A propos</a>
    <a href="#Tarifs">Tarifs</a>
    <a href="#gallerie">Photos</a>
    <a href="#pages">Coachs</a>
    <a href="#contact">contact</a>
    <Link to="/ProductPage" className="button">Boutique</Link>
    <Link to="/Boutique" className="button">Guide produits</Link>
    
    
  </div>
);

const styles = css`
//le style de menu
  
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0 22px;
    position: relative;
    transition: color 700ms ease-in-out;
    &::after {
      position: absolute;
      content: "";
      background: #ff1414;
      width: 100%;
      height: 3px;
      bottom: -33px;
      left: 0;
      opacity: 0;
      transition: opacity 700ms ease-in-out;
    }
    &:hover {
      color: #ff1414;
      &::after {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1225px) {
    padding: 80px 40px;
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 96vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background: #060706;
    transition: left 600ms ease-in-out, opacity 600ms ease-in-out;
    &.hidden {
      left: -500px;
      opacity: 0;
    }
    a {
      margin: 0 0 20px 0;
      font-size: 25px;
      text-align: left;
      user-select: none;
      &:hover {
        color: #fff;
        &::after {
          opacity: 0;
        }
      }
    }
  }



  /* styles pour le bouton */
  .button {
    padding: 10px 20px;
    background-color: #FF1414;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .button:hover {
    background-color: #E60000;
  }
`
;
export default Menu;