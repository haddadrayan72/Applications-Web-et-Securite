/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../GlobalComponents/Button";
import BigOfferBg from "../Images/bigOfferBg.webp";

//fonction pour propser des reduction pour etudiant  

const BannerOffer = () => (
  <section css={styles} className="bannerOffer">
    <h2>
     REDUCTION <br /> POUR ETUDIANTS
    </h2>
    <Button text='rejoins nous ' />
  </section>
);

const styles = css`
  width: 100%;
  padding: 240px 0;
  text-align: center;
  background: url('${BigOfferBg}') no-repeat center/cover;
  color: #fff;
  h2{
    font-size: 50px;
    font-weight: 900;
  }
  .btn{
    margin: 30px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;

export default BannerOffer;
