import React, { useState } from 'react';
import './Reduction.css';
import { doc, setDoc } from "firebase/firestore"; 

import { db } from "../../src/Firebase";
import Button from '../components/GlobalComponents/Button';


function connectToDataBasea(){
  const email = document.getElementById("email").value;
  const message = "message";

  setDoc(doc(db, "redaction",email), {
    message: "redaction etudiant"
  });
  alert(`ajout avec succes `);
}
function Reduction() {
  const [email, setEmail] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleStudentChange = (event) => {
    setIsStudent(event.target.checked);
  };

  const handleApplyDiscount = () => {
    if (isStudent) {
      setDiscountApplied(true);
      alert(`Merci d'avoir fourni votre adresse e-mail ${email}. Vous bénéficiez maintenant d'une remise de -20% sur nos formations de sport en ligne !`);
    } else {
      alert(`Merci d'avoir fourni votre adresse e-mail ${email}. Malheureusement, cette offre est réservée aux étudiants.`);
    }
  };

  return (
    <div>
      <h1>Offre étudiante de -20%</h1>
      <p>Vous êtes étudiant ? Profitez d'une remise de -20% sur nos formations de sport en ligne en vous inscrivant dès maintenant.</p>

      <label htmlFor="email">Entrez votre adresse e-mail :</label><br />
      <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} /><br /><br />

      <label htmlFor="student">Êtes-vous étudiant ?</label><br />
      <input type="checkbox" id="student" name="student" checked={isStudent} onChange={handleStudentChange} /><br /><br />

      <Button onClick={connectToDataBasea}  text="Envoyer" />

      {discountApplied && <p>Votre remise de -20% a été appliquée.</p>}
    </div>
  );
}

export default Reduction;