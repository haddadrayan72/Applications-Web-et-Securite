/** @jsxImportSource @emotion/react */
import {  css } from "@emotion/react";
import Overlay from "../GlobalComponents/Overlay";

const GalleryImg = ({ galleryBg }) => (
  <div css={styles} className="galleryImg">
    <Overlay />
    <img src={galleryBg} alt="trainer" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 35%;
  height: 750px; /* increase height */
  position: relative;
  cursor: pointer;
  &:hover {
    .overlay {
      opacity: 0;
      transition: opacity 700ms ease-in-out;
    }
  }
  .overlay {
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;


export default GalleryImg;
