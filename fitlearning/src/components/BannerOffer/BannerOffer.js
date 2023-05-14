/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import BigOfferBg from "../Images/bigOfferBg.webp";

//fonction pour propser des reduction pour etudiant  

const BannerOffer = () => (
  <section css={styles} className="bannerOffer">
    <h2>
    About us 
  </h2>
  <p className="paragraph">Notre passion est de vous aider à atteindre vos objectifs de remise en forme et de bien-être.
  Notre équipe d'experts qualifiés est là pour vous guider tout au long de votre parcours,
   en vous fournissant des programmes d'entraînement personnalisés, des conseils nutritionnels adaptés à vos besoins 
   et un soutien constant pour vous aider à rester motivé et engagé. Que vous soyez débutant ou athlète confirmé, 
   notre objectif est de vous aider à transformer votre corps et votre esprit 
   pour atteindre une meilleure version de vous-même.
   Rejoignez-nous dès aujourd'hui et découvrez la puissance de la remise en forme intelligente avec Fit Learning.
  </p>
   
  </section>
);

const styles = css`
width: 100%;
padding: 240px 0;
text-align: center;
background: url('${BigOfferBg}') no-repeat center/cover;
color: #fff;
h2 {
  font-size: 50px;
  font-weight: 900;
}
.paragraph {
  font-size: 18px;
  margin-top: 20px;
  color: #fff; /* Couleur du texte en blanc */
  line-height: 1.5;
  letter-spacing: 1px;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.btn {
  margin: 30px 0 0 0;
  &:hover {
    background: transparent;
    color: #ff1414;
    border: 1px solid #ff1414;
  }
}
`;


export default BannerOffer;
