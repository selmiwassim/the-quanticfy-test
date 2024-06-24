

const equipementsPlaces = fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?select=identifiant%2Cnom%2Ctype%2Cpayant%2Cadresse%2Choraires_periode&where=LENGTH(horaires_periode)%20%3D%2023%20%20%20AND%20horaires_periode%20IS%20NOT%20NULL%20%20%20AND%20payant%20IS%20NOT%20NULL%20%20%20AND%20nom%20IS%20NOT%20NULL%20%20%20AND%20type%20IS%20NOT%20NULL%20%20%20AND%20adresse%20IS%20NOT%20NULL%20%20%20AND%20identifiant%20IS%20NOT%20NULL&limit=100')
    .then(response => response.json())
    .then(data => {
        const fetchedPlaces = data.results.map(record => {

          
            let debut = null;
            let fin = null;

            // Extract start and end dates from horaires_periode
            const matches = record.horaires_periode.match(/(\d{2}\/\d{2}\/\d{2})/g);

            if (matches) {
                    debut = `20${matches[0].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '$3-$2-$1')}`;
                    fin = `20${matches[1].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '$3-$2-$1')}`;
                
            }


            // Create place Object based on fetched informations
            const place = {
                id: record.identifiant,
                nom: record.nom,
                type: record.type,
                adresse: record.adresse,
                debut: debut,
                fin: fin,
                cout: record.payant
            };

            return place;
        });

        return fetchedPlaces;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        return [];
    });



// Espaces verts
        
const greenPlaces = fetch('https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-espaces-verts-frais/records?select=identifiant%2Cnom%2Ctype%2Cadresse%2Choraires_periode&where=LENGTH(horaires_periode)=23%20AND%20horaires_periode%20IS%20NOT%20NULL%20AND%20adresse%20IS%20NOT%20NULL%20AND%20type%20IS%20NOT%20NULL&limit=70')
            .then(response => response.json())
            .then(data => {
              const fetchedPlaces = data.results.map(record => {
      
                  let debut = null;
                  let fin = null;
      
                  // Extract start and end dates from horaires_periode
                  const matches = record.horaires_periode.match(/(\d{2}\/\d{2}\/\d{2})/g);
      
                  if (matches) {
                      
                          debut = `20${matches[0].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '$3-$2-$1')}`;
                          fin = `20${matches[1].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '$3-$2-$1')}`;
                      
                  }
      

      
                  // Create place Object based on fetched informations
                  const place = {
                      id: record.identifiant,
                      nom: record.nom,
                      type: record.type,
                      adresse: record.adresse,
                      debut: debut,
                      fin: fin,
                      cout: "Non"
                  };

                  return place;
              });
      
              return fetchedPlaces;
          })
            .catch(error => console.error('Error fetching data:', error));
  
  export const fetchIslands = () => {
    return Promise.all([equipementsPlaces, greenPlaces])
      .then(allPlaces => {
        const combinedPlaces = [].concat(...allPlaces);
        return combinedPlaces;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return [];
      });
  };
  