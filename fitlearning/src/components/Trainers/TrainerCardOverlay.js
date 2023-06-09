/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/core";
import TrainerCardIcons from "./TrainerCardIcons";

const TrainerCardOverlay = () => (
  <div css={styles} className="cardOverlay">
    <TrainerCardIcons />
  </div>
);

const styles = css`
  width: 200%
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  height: 90%;
`;

export default TrainerCardOverlay;
