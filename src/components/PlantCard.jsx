import React, { useState } from "react";

function PlantCard({ name, image, price, toggleButton, toggle }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        {toggle ? (
          <button className="primary" onClick={toggleButton}>In Stock</button>
        ) : (
          <button onClick={toggleButton}>Out of Stock</button>
        )}

    </li>
  );
}

export default PlantCard;


//{toggle ? (
       // <button className="primary" onClick={toggleButton}>In Stock</button>
      //) : (
      //  <button onClick={toggleButton}>Out of Stock</button>
      //)}


//<button onClick={toggleButton}>
          //{toggle ? 'In Stock' : 'Out of Stock'}
      //  </button>