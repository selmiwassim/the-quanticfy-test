import { fetchFountains } from "../services/fetchFountain";
import React, { useState, useEffect } from 'react';
import FiltersFoutains from "./filtersFountain";




const DisplayFountains = () => {

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);
  

  useEffect(() => {
    fetchFountains()
      .then(fountainPlaces => {
        setPlaces(fountainPlaces);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFilteredPlaces = (filteredPlaces,input) => {
    setFilteredPlaces(filteredPlaces);
    setInput(input);
  };

  return (
    <div>
      <h2 className="title" >Fontaines à Paris</h2>

      <FiltersFoutains places={places} setFilteredPlaces={handleFilteredPlaces} loading={loading} />

      <table className="custom-table">
                <thead className="table-header">
                    <tr className="table-header" >
                        <th>Nom</th>
                        <th>Type</th>
                        <th>Adresse</th>
                        <th>Disponibilité</th>
                    </tr>
                </thead>
                <tbody>
                { input == "" ? 
                        (places.map((place) => (
                            <tr key={place.id}>
                                <td>{place.nom.charAt(0).toUpperCase() + place.nom.slice(1).toLowerCase()}</td>
                                <td>{place.type.charAt(0).toUpperCase() + place.type.slice(1).toLowerCase()}</td>
                                <td>{place.adresse.charAt(0).toUpperCase() + place.adresse.slice(1).toLowerCase()}</td>
                                <td>{place.dispo.charAt(0).toUpperCase() + place.dispo.slice(1).toLowerCase()}</td>
                            </tr>
                        ))) : filteredPlaces.length>0 ? (
                            filteredPlaces.map((place) => (
                                <tr key={place.id}>
                                    <td>{place.nom.charAt(0).toUpperCase() + place.nom.slice(1).toLowerCase()}</td>
                                    <td>{place.type.charAt(0).toUpperCase() + place.type.slice(1).toLowerCase()}</td>
                                    <td>{place.adresse.charAt(0).toUpperCase() + place.adresse.slice(1).toLowerCase()}</td>
                                    <td>{place.dispo.charAt(0).toUpperCase() + place.dispo.slice(1).toLowerCase()}</td>
                                   
                                </tr>
                            ))
                        ) : <tr><td>No results found</td></tr>}
                    
                </tbody>
            </table>
    </div>
  );
};

export default DisplayFountains;
