/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";

import Button from "../GlobalComponents/Button";
import {  Link } from "react-router-dom";
import { useState } from "react";



const JoinUsInfo = ({ title }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  return (
    <div css={joinUsInfoStyles} className="cardInfo">
      <h2>{title}</h2>
      {showMore ? (
        <div>
          <p>venez voir un peu plus sur ce qu'on propose pour vous</p>
          <Link to="/JoinPage">
            <Button text="voir plus" />
          </Link>
        </div>
      ) : (
        <div>
          <p>venez voir un peu plus sur ce qu'on propose pour vous</p>
          <Link to="/JoinPage">
          <Button text="Voir plus" onClick={handleShowMoreClick} />
          </Link>
        </div>
      )}
    </div>
  );
};




const joinUsInfoStyles = css`
  z-index: 3;
  color: #fff;
  position: relative;
  width: 100%;
  max-width: 380px;
  text-align: center;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
  }
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.6;
    margin: 18px 0 26px 0;
  }
  .btn {
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;

export default JoinUsInfo;
