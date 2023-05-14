/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import GalleryImg from "./GalleryImg";
import GalleryOneBg from "../Images/galleryOne.png";
import GalleryTwoBg from "../Images/galleryTwo.png";
import GalleryThreeBg from "../Images/galleryThree.png";
import GalleryFourBg from "../Images/galleryFour.png";
import GalleryFiveBg from "../Images/galleryFive.png";
import GallerySixBg from "../Images/gallerySix.png";
import { css as emotionCss } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//importation des differentes images de la page
import SliderHover from 'react-slick';
import Boutique from "../../Pages/Boutique";
const Gallery = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 769,
        settings: {
        centerPadding: '0',
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: '10%',
        },
      },
    ],
    hover: true, // add hover prop
  };
 
  return (
    <section css={styles} className="gallery" id="gallery">
      <div css={padding}></div>
      <SliderHover {...settings} hoverPause={true}>
        <Link to="/Boutique">
          <GalleryImg galleryBg={GalleryOneBg} />
        </Link>
        <Link to="/Login">
          <GalleryImg galleryBg={GalleryTwoBg} />
        </Link>
        <Link to="/Boutique">
          <GalleryImg galleryBg={GalleryThreeBg} />
        </Link>
        <Link to="/Boutique">
          <GalleryImg galleryBg={GalleryFourBg} />
        </Link>
        <Link to="/Boutique">
          <GalleryImg galleryBg={GalleryFiveBg} />
        </Link>
        <Link to="/Boutique">
          <GalleryImg galleryBg={GallerySixBg} />
        </Link>
      </SliderHover>
      <div css={padding}></div>
    </section>
  );
};

const padding = emotionCss`
  height: px;
`;

const styles = emotionCss`
  .slick-slide > div {
    outline: none;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .slick-prev {
    left: 20px;
    z-index: 1;
  }

  .slick-next {
    right: 20px;
    z-index: 1;
  }

  .slick-dots li button:before {
    color: black;
  }

  .slick-center .galleryImg {
    transform: scale(1.2);
  }

  .galleryImg {
    width: 100%;
    max-width: 100%;
    transition: all 0.3s ease-in-out;

    &:nth-child(3),
    &:nth-child(4) {
      max-width: 100%;
    }
  }

  @media (max-width: 769px) {
    .galleryImg {
      max-width: 100%;

      &:nth-child(3),
      &:nth-child(4) {
        max-width: 100%;
      }
    }
  }

  @media (min-width: 770px) and (max-width: 1000px) {
    .galleryImg {
      max-width: 50%;

      &:nth-child(3),
      &:nth-child(4) {
        max-width: 50%;
      }
    }
  }

  /* add hover styles */
  .slick-slider:hover .slick-slide:not(.slick-active) .galleryImg {
    transform: scale(0.8);
  }
  .slick-slider:hover .slick-active .galleryImg {
    transform: scale(1.2);
  }
`;
export default Gallery;


