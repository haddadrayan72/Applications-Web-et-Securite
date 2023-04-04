/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";

const Pricing = () => (
  <section css={styles} className="pricing" id="pricing">
    <Title
      title="NOS TARIFS"
      desc="PREOMMANDEZ DES MAINTENANT VOTRE FORMATION"
    />
    <Container>
      <PricingCard level="DEBUTANT" />
      <PricingCard level="EXPERT" />
      <PricingCard level="PROFESSIONNEL" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  background: #000;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 650px) {
    .title {
      padding: 0 40px;
    }
  }
  @media (max-width: 799px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 800px) and (max-width: 1189px) {
    .container {
      max-width: 90%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1190px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Pricing;
