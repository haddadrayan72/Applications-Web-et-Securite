import React, { useState, useEffect } from 'react';
import "./ProductPage.css";
import 'firebase/compat/firestore';

import  {data} from "../Firebase";


import { collection, query, getDocs } from 'firebase/firestore';


const ProductsPage = () => {
  const [Products, setProducts] = useState([]);

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

  return (
    <div>
      {Products.map((product) => (
        <div key={product.id}>
          <h3>{product.desc}</h3>
          <p>{product.nom}</p>
          <p>{product.prix}</p>
          <p>{product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;