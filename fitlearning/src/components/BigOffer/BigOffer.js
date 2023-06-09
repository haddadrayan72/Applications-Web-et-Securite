/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import Container from "../GlobalComponents/Container";
import BigOfferInfo from "./BigOfferInfo";
import etudes from "../Images/etudes.png";
// page de reduction pour etudiant

const BigOffer = () => (
  <section css={styles} className="bigOffer">
    <Container>
      <BigOfferInfo />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 200px 0;
  background: url('${etudes}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: flex-end;
  }
  @media(max-width: 800px) {
    .container{
      justify-content: center;
      max-width: 90%;
    }
  }
`;

export default BigOffer;
