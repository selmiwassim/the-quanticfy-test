// Filters.jsx
import React, { useState } from 'react';
import '../index.css'; 
import { IoFilterSharp } from "react-icons/io5";



const FiltersIslands = ({ places, setFilteredPlaces, loading }) => {

  const [input, setInput] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [chosenDate, setChosenDate] = useState(""); 
  const [showFilters, setShowFilters] = useState(false);



  if (loading) {
    return <div>Loading...</div>;
  }


  // Handling any filters Changes

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    let newInput = input;
    let newSelectedType = selectedType;
    let newSelectedPayment = selectedPayment;
    let newChosenDate = chosenDate;

    if (name === 'input') {
      newInput = value;
      setInput(newInput);
    } else if (name === 'type') {
      newSelectedType = value;
      setSelectedType(newSelectedType);
    } else if (name === 'payment') {
      newSelectedPayment = value;
      setSelectedPayment(newSelectedPayment);
    } else if (name === 'date') {
        newChosenDate = value;
        setChosenDate(value);          
    }


    const filtered = places.filter(place => {

        const nameMatches = place.nom.toLowerCase().includes(newInput.toLowerCase());
        const typeMatches = newSelectedType === '' || newSelectedType === 'Tout' || place.type.toLowerCase() === newSelectedType.toLowerCase();        
        const paymentMatches = newSelectedPayment === '' ||  newSelectedPayment === 'Sélectionnez le paiement' || newSelectedPayment.toLowerCase() === place.cout.toLowerCase();
        const dateMatches = newChosenDate === '' || (new Date(place.debut) <= new Date(newChosenDate) && new Date(place.fin) >= new Date(newChosenDate));

      return nameMatches && typeMatches && paymentMatches && dateMatches;
    });

    setFilteredPlaces(filtered);
  };

  
// Setting Filters in the UI 

  const toggleFilters = () => {
    setShowFilters(!showFilters);
   
  };

  const resetFilters = () => {
    setInput('');
    setSelectedType('');
    setSelectedPayment('');
    setChosenDate(null); 
    setFilteredPlaces(places); 
  };

  const retrieveTypes = () => {
    if (!places) {
      return [];
    }

    const types = [];
    types.push("Tout")

    places.forEach(place => {
      if (!types.includes(place.type)) {
        types.push(place.type);
      }
    });

    return types;
  };


  return (
   <>
    <div className="search-filters-container">
        <div className="search-container">
        <input
            className="search-input"
            type="text"
            placeholder="Search by place name..."
            name="input"
            value={input}
            onChange={handleFilterChange}
          />
        </div>
        
        <div className="filters-container">
          <button className="filter-button" onClick={toggleFilters}>
            <IoFilterSharp className="filter-icon" />
            Filters
          </button>
        </div>
        {showFilters && (
        <div className="extra-filters-container">
          <label className="filter-element">
            Type:
            <select name="type" value={selectedType} onChange={handleFilterChange}>
            {retrieveTypes().map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="filter-element">
            Payant:
            <select name="payment" value={selectedPayment} onChange={handleFilterChange}>
              <option value="Sélectionnez le paiement">Sélectionnez le paiement</option>
              <option value="Non">Non</option>
              <option value="Oui">Oui</option>
            </select>
          </label>
          <label className="filter-element">
            Date:
            <input
              type="date"
              name="date"
              value={chosenDate || ""}
              onChange={handleFilterChange}
              
            />
          </label>
          <div className='remove-filters' onClick={resetFilters}>
              Remove Filters
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default FiltersIslands;
