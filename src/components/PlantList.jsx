import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allplants, toggleButton, toggle }) {
  return (
    <ul className="cards">
      {allplants.map(plant => (
        <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} toggleButton={toggleButton} toggle={toggle}/>
      ))}
    </ul>
  );
}

export default PlantList;
