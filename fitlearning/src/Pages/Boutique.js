import { useState, useEffect } from "react";
import './Boutique.css';
import spiruline from '../components/Produits/spiruline.png';
import apurna from '../components/Produits/apurna.png';
import isostar  from '../components/Produits/isostar.png';
import proteinvegan  from '../components/Produits/proteinvegan.png';
import mass  from '../components/Produits/mass.png';
import magnesium  from '../components/Produits/magnesium.png';
import creatine  from '../components/Produits/creatine.png';
import jus  from '../components/Produits/jus.png';
import bcaa  from '../components/Produits/bcaa.png';
import whey  from '../components/Produits/whey.png';
import bio  from '../components/Produits/bio.png';
import veganbar  from '../components/Produits/veganbar.png';


const products = [
  {
    id: 1,
    name: "Spiruline de nu3",
    price: 39.99,
    image: spiruline,
  },
  {
    id: 2,
    name: "Apurna Boisson",
    price: 15,
    image: apurna,
  },
  {
    id: 3,
    name: "Bar Isostar",
    price: 20,
    image: isostar,
  },
  {
    id: 4,
    name: " Proteine vegan",
    price: 45.5,
    image: proteinvegan,
  },
  {
    id: 5,
    name: "Mass Gainer ",
    price: 39.99,
    image: mass,
  },
  {
    id: 6,
    name: "Magnésium ",
    price: 19.98,
    image: magnesium,
  },
  {
    id: 7,
    name: "La Créatine  ",
    price: 34.5,
    image: creatine,
  },
  {
    id: 8,
    name: " Jus Punch Power ",
    price: 24.99,
    image: jus,
  },
  {
    id: 9,
    name: "BCAA gélules ",
    price: 23,
    image: bcaa,
  },
  {
    id: 10,
    name: "Whey native isolate",
    price: 30,
    image: whey,
  },
  {
    id: 11,
    name: "Natural Bio Booster ",
    price: 62.99,
    image: bio,
  },
  {
    id: 12,
    name: "Vegan protein bar",
    price: 34.99,
    image: veganbar,
  },
];

const Boutique = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartValidated, setIsCartValidated] = useState(false);
  
    const addToCart = (product) => setCart([...cart, product]);
  
    useEffect(() => {
      let totalPrice = cart.reduce((total, product) => total + product.price, 0);
      setTotalPrice(totalPrice);
    }, [cart]);
  
    const handleValidation = () => {
      setCart([]);
      setIsCartValidated(true);
    };
  
    const handlePayment = () => {
      // Code pour passer au paiement
      alert(`Paiement de ${totalPrice} € effectué avec succès !`);
      setIsCartValidated(false);
      setTotalPrice(0);
    };
  
    return (
      <div>
        <h1>Boutique</h1>
        <div className="container">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="info">
                <h3>{product.name}</h3>
                <p>{product.price} €</p>
              </div>
              <button onClick={() => addToCart(product)}>Ajouter au panier</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Mon panier</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  <span>{product.name}</span>
                  <span>{product.price} €</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Votre panier est vide.</p>
          )}
          {isCartValidated ? (
            <div className="validation">
              <p>Total : {totalPrice} €</p>
              <button onClick={handlePayment}>Payer</button>
            </div>
          ) : (
            <button onClick={handleValidation}>Valider mon panier</button>
          )}
        </div>
      </div>
    );
};

export default Boutique;