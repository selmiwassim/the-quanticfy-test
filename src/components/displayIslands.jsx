import React, { useState, useEffect } from 'react';
import { fetchIslands } from '../services/fetchIslands';
import '../index.css'; 
import FiltersIslands from './filtersIslands';
import NavigationBar from './navBar';


const DisplayIslands = () => {


  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  const [filteredPlaces, setFilteredPlaces] = useState([]);


  useEffect(() => {
    fetchIslands()
      .then(combinedPlaces => {
        setPlaces(combinedPlaces);
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
            <NavigationBar/>

      <h2 className="title">Ilots de fraîcheur à Paris</h2>
      <FiltersIslands places={places} setFilteredPlaces={handleFilteredPlaces} loading={loading} />
      <table className="custom-table">
                <thead className="table-header">
                    <tr>
                        <th>Nom</th>
                        <th>Type</th>
                        <th>Adresse</th>
                        <th>Payant</th>
                        <th>Horaire</th>
                    </tr>
                </thead>
                <tbody>
                {input === "" ? (
                      places.map((place) => {
                        
                          return (
                              <tr key={place.id}>
                                  <td>{place.nom.charAt(0).toUpperCase() + place.nom.slice(1).toLowerCase()}</td>
                                  <td>{place.type.charAt(0).toUpperCase() + place.type.slice(1).toLowerCase()}</td>
                                  <td>{place.adresse.charAt(0).toUpperCase() + place.adresse.slice(1).toLowerCase()}</td>
                                  <td>{place.cout.charAt(0).toUpperCase() + place.cout.slice(1).toLowerCase() }</td>
                                  <td>{"du " + place.debut + " au " + place.fin}</td>
                              </tr>
                          );
                      })
                  ) : filteredPlaces.length>0 ? (
                        filteredPlaces.map((place) => {
                          
                          return (
                              <tr key={place.id}>
                                  <td>{place.nom}</td>
                                  <td>{place.type}</td>
                                  <td>{place.adresse}</td>
                                  <td>{place.cout}</td>
                                  <td>{"du " + place.debut + " au " + place.fin}</td>
                              </tr>
                          );
                      })
                    ): <tr><td>No results found</td></tr>}
                </tbody>
            </table>
    </div>
  );
};

export default DisplayIslands;
