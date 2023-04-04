/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import MainBgOne from "../Images/mainBgOne.png";
import TrainerCard from "./TrainerCard";
import unnamedd from "../Images/unnamedd.png";
import ray from "../Images/ray.png";
import tg from "../Images/tg.png";
import am from "../Images/am.png";

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
        trainerGender="Coach femme"
        trainerImg={unnamedd}
      />
      <TrainerCard
        trainerName="Amane Haddad"
        trainerGender="Coach Homme"
        trainerImg={am}
      />
      <TrainerCard
        trainerName="Ait Dris Mohamed"
        trainerGender="Coach Homme"
        trainerImg={tg}
      />
      <TrainerCard
        trainerName="Rayan Haddad"
        trainerGender="Coach Homme"
        trainerImg={ray}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 160px 0;
  text-align: center;
  position: relative;
  background: url('${MainBgOne}') no-repeat center/cover;
  .title{
    position: relative;
    z-index: 5;
  }
  .container {
    display: relative;
    justify-content: space-between;
    z-index: 6;
    position: relative;
    padding: 40px 0 0 0;
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
