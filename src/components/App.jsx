import {React, useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [loading, setLoading] = useState(true)
  const [plantInfo, changePlantInfo] = useState([])

  const [searchValue, changeSearch] = useState("")
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return response.json()
    })
    .then(changePlantInfo)
    .catch(e => console.log(e))
  }, [])

  function addPlant(newPlant) {
    changePlantInfo(currentPlants => [...currentPlants, newPlant])
  }

  function toggleButton() {
    setToggle(!toggle)
  }

  const filteredPlants = plantInfo.filter((plant) => plant.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage allplants={filteredPlants} addPlant={addPlant} changeSearch={changeSearch} toggleButton={toggleButton} toggle={toggle}/>
    </div>
  );
}

export default App;
