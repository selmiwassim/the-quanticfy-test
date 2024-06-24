
 
const fountainPlaces = fetch('https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?select=gid%2Ctype_objet%2Cmodele%2Cvoie%2Cdispo&where=gid%20IS%20NOT%20NULL%20AND%20type_objet%20IS%20NOT%20NULL%20AND%20modele%20IS%20NOT%20NULL%20AND%20voie%20IS%20NOT%20NULL%20AND%20dispo%20IS%20NOT%20NULL&limit=100')
            .then(response => response.json())
            .then(data => {
                const fetchedPlaces = data.results.map(record => ({
                    id: record.gid,
                    nom: record.modele, 
                    type: record.type_objet, 
                    dispo: record.dispo, 
                    adresse: record.voie 
                    
                }));
                return fetchedPlaces;
            })
            .catch(error => console.error('Error fetching data:', error));



export const fetchFountains = () => {
    return fountainPlaces
}