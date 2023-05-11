/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import Button from "../GlobalComponents/Button";

import {  Link } from "react-router-dom";

const BigOfferInfo = () => (
  <div css={styles} className="info">
    <h3>
      SPECIAL<br />  ETUDIANTS
    </h3>
    <h2>20% DE REDUCTION</h2>
    <p>
    Le sport va chercher la peur pour la dominer, la fatigue pour en triompher, la difficulté pour la vaincre. <br /> la difficulté pour la vaincre.
    </p>
    <Link to="/Reduction">
                <Button text="Clique-ici pour voir nos réductions" />
              </Link>

  </div>
);

const styles = css`
  width: 100%;
  max-width: 560px;
  color: #fff;
  h3 {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
  }
  h2 {
    font-size: 80px;
    font-weight: 500;
    line-height: 1;
    color: #ff1414;
    margin: 20px 0 24px 0;
  }
  p {
    line-height: 1.7;
  }
  .btn {
    margin: 40px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
  @media (max-width: 800px) {
    p {
      font-size: 16px;
      br {
        display: none;
      }
    }
  }
`;

export default BigOfferInfo;
