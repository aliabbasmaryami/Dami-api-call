import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Product.css";

const Cards = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    }
    getStoreData();
  }, []);

  const productCards = product.map((product) => (
    
    <Card style={{ width: '18rem', marginLeft:"25px", marginTop:'35px' }} >
      <Card.Img src={product.image} className="img"
      />
      <Card.Body>
        <Card.Title className="title">{product.title}</Card.Title>
        <Card.Text>
         PKR : {product.price}
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
  
  ));

  return (
    <>
      <h2>Products</h2>
      <div className="row">{productCards}</div>
    </>
  );
};

export default Cards;
