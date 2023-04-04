/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const MainInfo = () => (
  <div css={styles} className="mainInfo">
    <h3>PERSISTE </h3>
    <h1>JUSQU'AU SUCCÉS</h1>
    <p>Rendez l'impossible possible avec nous !</p>
    <Button text="REJOIGNEZ-NOUS" />
  </div>
);

const styles = css`
  h3 {
    font-size: 43px;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
  }
  h1 {
    font-size: 150px;
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

export default MainInfo;
