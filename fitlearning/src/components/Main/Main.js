/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import Overlay from "../GlobalComponents/Overlay";
import Nav from "./Navbar/Nav";
import Container from "../GlobalComponents/Container";
import MainInfo from "./MainInfo";
import muscu from "../Images/muscu.jpg";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Container>
      <MainInfo />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 96vh;
  background: url('${muscu}') no-repeat center/cover;
  display: flex;
  position: relative;
  .container {
    margin: auto;
    text-align: center;
    z-index: 2;
    color: #fff;
  }
  @media (max-width: 965px){
    .container{
      max-width: 90%;
    }
  }
`;

export default Main;
