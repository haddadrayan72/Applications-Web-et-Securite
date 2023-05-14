/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../GlobalComponents/Button";
import { Link } from "react-router-dom";


const styles = css`
  h3 {
    font-family: Segoe UI;
    font-style: Italic;
    font-size: 43px;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
  }
  
  h1 {
    font-style: oblique;
    font-family: 'Graffiti font', sans-serif;
    font-size: 100px;
    font-weight: 900;
    line-height: 1;
    margin: 24px 0;
    text-transform: uppercase;
  }
  
  p {
    font-size: 21px;
  }
  
  .btn {
    margin: 32px 0 0 0;
    padding: 15px 50px;
    
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
  
  @media (max-width: 640px) {
    h1 {
      font-size: 40px;
    }
    
    p {
      font-size: 18px;
    }
  }
  
  @media (min-width: 641px) and (max-width: 965px) {
    h1 {
      font-size: 80px;
    }
  }
`;

const MainInfo = () => (
  <div className="mainInfo" css={styles}>
    <h3>PERSISTE</h3>
    <h1>JUSQU'AU SUCCÉS</h1>
    <p>Rendez l'impossible possible avec nous !</p>
    <Link to="/Login" >
      <Button text="REJOIGNEZ-NOUS">
      </Button>
    </Link>
  </div>
);

export default MainInfo;

