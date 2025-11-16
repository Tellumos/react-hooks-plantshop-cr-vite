import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ allplants, addPlant, changeSearch, toggleButton, toggle }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search changeSearch={changeSearch} />
      <PlantList allplants={allplants} toggleButton={toggleButton} toggle={toggle}/>
    </main>
  );
}

export default PlantPage;
