import React, { useState, useEffect } from 'react';
import "./ProductPage.css";
import 'firebase/compat/firestore';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { data } from "../Firebase";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollectionRef = collection(data, 'Products');
      const productsQuery = query(productsCollectionRef);
      const snapshot = await getDocs(productsQuery);

      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      const productsData = snapshot.docs.map((doc) => doc.data());
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      const cartCollectionRef = collection(data, 'Cart');
      await addDoc(cartCollectionRef, product);
      console.log('Product added to cart:', product);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
        
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <h3>{product.desc}</h3>
          <p>{product.nom}</p>
          <p>{product.prix}</p>
          <p>{product.stock}</p>
          <button onClick={() => addToCart(product)}>Ajouter </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;