import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { data } from "../Firebase";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartCollectionRef = collection(data, 'Cart');
      const cartQuery = query(cartCollectionRef);
      const unsubscribe = onSnapshot(cartQuery, (snapshot) => {
        const cartData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCartItems(cartData);
        setTotalAmount(calculateTotalAmount(cartData));
      });

      return () => unsubscribe();
    };

    fetchCartItems();
  }, []);

  const removeCartItem = async (itemId) => {
    try {
      const cartItemDocRef = doc(data, 'Cart', itemId);
      await deleteDoc(cartItemDocRef);
      console.log('CartItem removed:', itemId);
    } catch (error) {
      console.error('Error removing cartItem:', error);
    }
  };

  const handlePayment = async () => {
    // Votre logique de paiement ici
    // Par exemple, vous pouvez envoyer une requête API pour effectuer le paiement

    // Réinitialiser le panier après le paiement
    const cartItemIds = cartItems.map((item) => item.id);
    await Promise.all(cartItemIds.map((itemId) => deleteDoc(doc(data, 'Cart', itemId))));
    console.log('Paiement effectué. Panier vidé.');
  };

  const calculateTotalAmount = (cartData) => {
    return cartData.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  return (
    <div>
      <h1>Mon panier</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.prix} €</span>
              <span>quantite : {item.quantite}</span>
              <button onClick={() => removeCartItem(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Votre panier est vide.</p>
      )}

      {/* Afficher le montant total du panier */}
      <p>Total : {totalAmount} €</p>

      {/* Bouton pour effectuer le paiement */}
      {cartItems.length > 0 && (
        <button onClick={handlePayment}>Payer</button>
      )}
    </div>
  );
};

export default CartPage;





