/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";

const Button = ({ text,onClick }) => (
  <a href="#/" css={styles} onClick={onClick} className="btn">
    {text}
  </a>
);
//implementation du module button pour l'utilisation de la fonction OnClick() pour naviguer entre les sections de la page
const styles = css`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  padding: 15px 44px;
  background: #ff1414;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 500ms ease-in-out;
`;

export default Button;
