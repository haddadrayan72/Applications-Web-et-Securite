/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import JoinUsCard from "./JoinUsCard";
import ForGirlBg from "../Images/forGirl.png";
import ForBoysBg from "../Images/forBoys.png";

const JoinUs = () => (
  <section css={styles} className="joinUs" id="blog">
    <Container>
      <JoinUsCard title="POUR FEMMES" />
      <JoinUsCard title="POUR HOMMES" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .card {
      width: 400px;
      height: 500px;
      border-radius: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      font-size: 2rem;
      text-align: center;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.05);
      }
      &:first-of-type {
        background-image: url(${ForGirlBg});
      }
      &:last-of-type {
        background-image: url(${ForBoysBg});
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
      .card {
        margin-bottom: 2rem;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default JoinUs;