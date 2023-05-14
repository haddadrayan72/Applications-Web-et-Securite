/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import Card from "./Card";
import IconOne from "../Images/iconOne.svg";
import IconTwo from "../Images/iconTwo.svg";
import IconThree from "../Images/iconThree.svg";
import IconFour from "../Images/iconFour.svg";



//utilisant des tableaux pour stocker les informations de chaque carte,
// et en utilisant la méthode map() pour générer dynamiquement les cartes à partir des données du tableau

const cardsData = [
  {
    id: 1,
    cardImg: IconOne,
    cardTitle: "Programme Personnel",
    cardDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    cardImg: IconTwo,
    cardTitle: "Programme Alimentaire",
    cardDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    cardImg: IconThree,
    cardTitle: "Suivi de Progrés",
    cardDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    cardImg: IconFour,
    cardTitle: "Astuces et Conseils de Coach",
    cardDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Features = () => {
  return (
    <section css={styles} className="features" id="about">
      <Title
        title="NOS FORMATIONS"
        desc="On vous propose un programme 100% en ligne.Formez-vous à votre rythme, sans contrainte d’horaires quand vous êtes disponible ."
      />
      <Container>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            cardImg={card.cardImg}
            cardTitle={card.cardTitle}
            cardDesc={card.cardDesc}
          />
        ))}
      </Container>
    </section>
  );
};

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
