/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../GlobalComponents/Button";
import { doc, setDoc } from "firebase/firestore"; 

import { db } from "../../Firebase";



function connectToDataBase(){
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  setDoc(doc(db, "feedback",email), {
    message: message
  });

}

const FooterCardContainer = () => (
  <div className="wrap" css={styles}>
    <div className="footerCard">
      <h2>FitLearning</h2>
      <p>45 avenue des etats unis, 78000, Versailles</p>
      <a href="#/">+33 1 39 25 78 00</a>
      <a href="#/">fitlearning2023@gmail.com</a>
      <div className="footerSocials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
    
    <div className="footerCard">
      <h2>FORUM</h2>
      <div className="inputWrap">
        <input required id="email" type="email" placeholder="Ecrit ton e-mail" />
      </div>
      <div className="inputWrap">
      <input required id="message" type="textarea" placeholder="Ecrit ton message" />   
      </div>
      <div  className="inputWrap">
      <Button onClick={connectToDataBase}  text="Envoyer" />
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  justify-content: space-between;
  .footerCard {
    width: 100%;
    max-width: 24%;
    color: #aab1b7;
    &:nth-child(2),
    &:nth-child(3) {
      max-width: 28%;
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 18px;
      }
    }
    &:nth-child(3) {
      p {
        margin: 24px 0 0 0;
      }
    }
    h2 {
      font-size: 24px;
      margin-bottom: 40px;
      color: #ff1414;
    }
    p {
      line-height: 1.5;
      margin-bottom: 8px;
    }
    a {
      text-decoration: none;
      display: inline-block;
      color: #aab1b7;
      margin-bottom: 8px;
      transition: color 600ms ease-in-out;
      &:hover {
        color: #ff1414;
      }
    }
    .footerSocials {
      width: 100%;
      padding: 40px 0 0 0;
      display: flex;
      align-items: center;
      i {
        margin-right: 30px;
        cursor: pointer;
        transition: color 600ms ease-in-out;
        &:hover {
          color: #ff1414;
        }
      }
    }
    .inputWrap {
      display: flex;
      position: relative;
      input {
        padding: 16px 0 16px 16px;
        width: 100%;
        border-radius: 50px;
        border: none;
        outline: none;
      }
      .inputWrape {
        display: flex;
        position: relative;
        input {
          padding: 16px 0 16px 16px;
          width: 100%;
          border-radius: 50px;
          border: none;
          outline: none;
        }
      .btn {
        padding: 10px 20px;
        border-radius: 50px;
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      max-width: 450px;
      margin-bottom: 40px;
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 450px;
      }
    }
  }
  @media (min-width: 641px) and (max-width: 915px) {
    flex-wrap: wrap;
    .footerCard {
      max-width: 45%;
      &:first-of-type {
        margin-bottom: 40px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 45%;
      }
    }
  }
  @media (max-width: 916px) {
    .footerCard {
      p {
        font-size: 14px;
      }
      &:first-of-type {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

export default FooterCardContainer;