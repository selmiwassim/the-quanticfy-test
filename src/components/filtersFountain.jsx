// Filters.jsx
import React, { useState } from 'react';
import '../index.css'; 
import { IoFilterSharp } from "react-icons/io5";



const FiltersFoutains = ({ places, setFilteredPlaces, loading }) => {

  const [input, setInput] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDispo, setSelectedDispo] = useState('');
  const [adress, setAdress] = useState(""); 
  const [showFilters, setShowFilters] = useState(false);



  if (loading) {
    return <div>Loading...</div>;
  }


  // Handling any filters Changes

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    let newInput = input;
    let newSelectedType = selectedType;
    let newSelectedDispo = selectedDispo;
    let newAdress = adress;


    if (name === 'input') {
      newInput = value;
      setInput(newInput);
    } else if (name === 'type') {
      newSelectedType = value;
      setSelectedType(newSelectedType);
    } else if (name === 'disponibilité') {
      newSelectedDispo = value;
      setSelectedDispo(newSelectedDispo);
    } else if(name =='adress'){
      newAdress = value;
      setAdress(value);
    }


    const filtered = places.filter(place => {

        const nameMatches = place.nom.toLowerCase().includes(newInput.toLowerCase());
        const typeMatches = newSelectedType === '' || newSelectedType === 'Tout' || place.type.toLowerCase() === newSelectedType.toLowerCase();        
        const dispoMatches = newSelectedDispo === '' || newSelectedDispo === 'Vérifier la disponibilité' || place.dispo.toLowerCase() === newSelectedDispo.toLowerCase();
        const adressMatches = place.adresse.toLowerCase().includes(newAdress.toLowerCase());

      return nameMatches && typeMatches && dispoMatches && adressMatches;
    });
    console.log(filtered)
    setFilteredPlaces(filtered);
  };

  
// Setting Filters in the UI 

  const toggleFilters = () => {
    setShowFilters(!showFilters);
   
  };

  const resetFilters = () => {
    setInput('');
    setSelectedType('');
    setSelectedDispo('');
    setAdress('');
    setFilteredPlaces(places); 
  };

  const retrieveTypes = () => {
    if (!places) {
      return [];
    }

    const types = [];
    types.push("Tout")

    places.forEach(place => {
      if (!types.includes(place.type.charAt(0).toUpperCase() + place.type.slice(1).toLowerCase())) {
        types.push(place.type.charAt(0).toUpperCase() + place.type.slice(1).toLowerCase());
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
            placeholder="Recherche par nom..."
            name="input"
            value={input}
            onChange={handleFilterChange}
          />
        </div>
        
        <div className="filters-container">
          <button className="filter-button" onClick={toggleFilters}>
            <IoFilterSharp className="filter-icon" />
            Filtres
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
              Disponibilité:
              <select name="disponibilité" value={selectedDispo} onChange={handleFilterChange}>
                <option value="Vérifier la disponibilité">Vérifier la disponibilité</option>
                <option value="Non">Non</option>
                <option value="Oui">Oui</option>
              </select>
            </label>
            <label className="filter-element">
            Adresse
          <input  
              className='adress-input'
              type="text"
              placeholder="Recherche par adresse ..."
              name="adress"
              value={adress}
              onChange={handleFilterChange}
            />
          </label>
            
            <div className='remove-filters' onClick={resetFilters}>
            Supprimer les filtres

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FiltersFoutains;
