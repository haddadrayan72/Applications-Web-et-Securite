/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import MainBgOne from "../Images/mainBgOne.png";
import TrainerCard from "./TrainerCard";
import celine from "../Images/celine.png";
import rayan from "../Images/rayan.png";
import dris from "../Images/dris.png";
import amane from "../Images/amane.png";

const Trainers = () => (
  <section css={styles} className="trainers" id="pages">
    <ImgOverlay />
    <Title
      title="NOS COACHS"
      desc="En compétition, il y a toujours un premier et un dernier, mais l'important est de ne pas être le second de soi-même."
    />
    <Container>
      <TrainerCard
        trainerName="Céline saoudi"
        trainerGender="Coach Femme"
        trainerImg={celine}
      />
      <TrainerCard
        trainerName="Mohamed Ait Dris"
        trainerGender="Coach Homme"
        trainerImg={dris}
      />
      <TrainerCard
        trainerName="Amane Haddad"
        trainerGender="Coach Homme"
        trainerImg={amane}
      />
      <TrainerCard
        trainerName="Rayan Haddad"
        trainerGender="Coach Homme"
        trainerImg={rayan}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  position: relative;
  background: url('${MainBgOne}') no-repeat center/cover;
  
  .title{
    position: relative;
    z-index: 5;
  }
  .container {
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    gap: 70px; /* add this line to set the gap between TrainerCard components */
    z-index: 6;
    position: relative;
    padding: 80px 0 0 0;
  }
  .socialIcons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  @media(max-width: 650px) {
    .title{
      padding: 0 40px;
    }
  }
  @media(max-width: 769px) {
      .container{
        max-width: 90%;
        flex-direction: column;
        align-items: center;
      }
  }
  @media(min-width: 770px) and (max-width: 1200px) {
    .container{
        max-width: 90%;
        flex-wrap: wrap;
      }
  }
`;


export default Trainers;
