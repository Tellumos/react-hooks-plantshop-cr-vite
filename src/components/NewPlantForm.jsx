import React, { useState } from "react";

function NewPlantForm({ addPlant, }) {

  const [plantInfo, setPlantInfo] = useState({
    name: "",
    image: "",
    price: 0,
  })

  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {
      ...plantInfo,
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant),
    })
      .then(response => {
        if (!response.ok) {throw new Error("Failed to add new plant")}
        return response.json()
      })
      .then(newPlant => {
        addPlant(newPlant)
        setPlantInfo({
          name: "",
          image: "",
          price: 0,
        })
      })
      .catch(e => console.log(e.message))
    }

    function handleChange(e) {
      setPlantInfo(inputValue => ({
        ...inputValue, [e.target.name]: e.target.value
      }))
    }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={plantInfo.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={plantInfo.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={plantInfo.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
