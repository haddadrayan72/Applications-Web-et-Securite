/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import BigOfferInfo from "./BigOfferInfo";
import et from "../Images/et.jpg";

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
  background: url('${et}') no-repeat center/cover;
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
