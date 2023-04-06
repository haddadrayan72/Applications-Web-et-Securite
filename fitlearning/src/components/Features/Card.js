/** @jsx jsx */
import { jsx, css } from "@emotion/core";


const FeaturesCard = ({ cardImg, cardTitle }) => {
  const styles = {
    width: "100%",
    maxWidth: "25%",
    color: "#fff",
    textAlign: "center",
    padding: "0 20px",
    h3: {
      fontSize: "24px",
      lineHeight: "1",
      margin: "24px 0 0 0",
    },
    p: {
      margin: "12px 0 0 0",
      lineHeight: "1.6",
      color: "#aab1b7",
    },
    "@media(max-width: 579px)": {
      maxWidth: "100%",
      marginBottom: "50px",
      p: {
        fontSize: "14px",
      },
    },
    "@media (min-width: 580px) and (max-width: 1000px)": {
      maxWidth: "47%",
      marginBottom: "50px",
    },
  };

  return (
    <div style={styles} className="featuresCard">
      <img src={cardImg} alt="icon" />
      <h3>{cardTitle}</h3>
      <p>En sport tout demande les trois D. Détermination,disponibilité,discipline.</p>
    </div>
  );
};

export default FeaturesCard;