

function HomePage() {

    const imageUrl ="https://img.freepik.com/vecteurs-libre/personnes-dessinees-main-dans-collection-du-parc_23-2148157514.jpg?t=st=1719230338~exp=1719233938~hmac=0e7b282634dcab606a41650dad9e4f48f64273b93a5d443ef167aad9b5e77921&w=740"

    return (
        <div className="home-page">
          <div className="content">
            <div className="left-section">
              <h1 className="section">Bienvenue à Paris!</h1>
              <p className="subsection">
                Explorez les ilots de fraîcheur et les fontaines à boire à proximité 
                et profitez d'une expérience agréable en plein air.</p>
              <button className="start-button">Trouver Votre Endroit</button>
            </div>
            <div className="right-section">
                <div className="image-wrapper">
                <img src={imageUrl} alt="Image" />
            </div>
            </div>
          </div>
        </div>
      );
    


}

export default HomePage;