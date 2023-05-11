import React from "react";

import { collection, query, getFirestore ,getDocs} from "firebase/firestore";
import "firebase/firestore";

import {useEffect,useState} from "react";
import App from "../App";
import "./Product.css"



const Product = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const db = getFirestore(App);

  useEffect(() => {
    // récupérer les produits de la collection "products" de Firestore
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      });
  }, [db]);

  function addProduct(e) {
    e.preventDefault();
    db.collection("products")
      .add({
        name: "see",
        description: "Product Description",
        price: 9.99,
        stock: 10,
      })
      .then(() => {
        console.log("Product added successfully with ID: ", docRef.id);
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductStock("");
        
      })
      .catch((error) => {
        console.error("Error adding product: ", error);
      });
  }
  
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={addProduct}>
        <label htmlFor="productName">Product name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="productDescription">Product description:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <label htmlFor="productPrice">Product price:</label>


        <input
      type="number"
      id="productPrice"
      value={productPrice}
      onChange={(e) => setProductPrice(e.target.value)}
    />
    <label htmlFor="productStock">Product stock:</label>
    <input
      type="number"
      id="productStock"
      value={productStock}
      onChange={(e) => setProductStock(e.target.value)}
    />
    <button type="submit">Add Product</button>
  </form>
</div>
);
};

export default Product;
