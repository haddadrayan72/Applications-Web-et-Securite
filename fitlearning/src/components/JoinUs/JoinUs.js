/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import Container from "../GlobalComponents/Container";
import JoinUsCard from "./JoinUsCard";
import filles from "../Images/filles.jpg";
import men from "../Images/men.jpg";

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
  .card {
    background: url('${filles}') no-repeat center/cover;
    background-size: 100% 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      background-size: 105% 105%;
    }
    &:last-of-type {
      background: url('${men}') no-repeat center/cover;
      background-size: 100% 100%;
      &:hover{
          background-size: 105% 105%;
      }
    }
  }
}
@media(max-width: 1000px){
  .container{
    flex-direction: column;
    align-items: center;
  }
}
`;


export default JoinUs;