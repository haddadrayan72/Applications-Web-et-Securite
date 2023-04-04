/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import FeaturesCard from "./FeaturesCard";
import IconOne from "../Images/iconOne.svg";
import IconTwo from "../Images/iconTwo.svg";
import IconThree from "../Images/iconThree.svg";
import IconFour from "../Images/iconFour.svg";

const Features = () => (
  <section css={styles} className="features" id="about">
    <Title
      title="NOS FORMATIONS"
      desc="On vous propose un programme 100% en ligne.Formez-vous à votre rythme, sans contrainte d’horaires quand vous êtes disponible ."
    />
    <Container>
      <FeaturesCard cardImg={IconOne} cardTitle="Programme Personnel" />
      <FeaturesCard cardImg={IconTwo} cardTitle="Programme Alimentaire" />
      <FeaturesCard cardImg={IconThree} cardTitle="Suivi de Progrés" />
      <FeaturesCard cardImg={IconFour} cardTitle="Astuces et Conseils de Coach" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 170px 0;
  background: #000;
  .container {
    display: flex;
    padding: 80px 0 0 0;
  }
  @media (max-width: 579px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 640px;
    }
  }
`;

export default Features;
