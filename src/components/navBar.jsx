import React, {useState} from 'react';
import '../index.css';


const NavigationBar = ({ display, setDisplay }) => {
  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  return (
    <div className="nav-bar">
      <img 
         src="https://img.freepik.com/vecteurs-libre/guide-cartographique-papier_24877-82055.jpg?t=st=1719223900~exp=1719227500~hmac=f7cdf82e32e60c3dd90a68ed5510a837bcf95db39793231ba6d3ceb517d984ed&w=740" 
        alt="Logo" 
        className={`nav-bar-logo ${display === 'Islands' ? 'selected' : ''}`} 
        onClick={() => handleDisplayChange('Home')}
      />
      <div 
        className={`nav-bar-item ${display === 'Islands' ? 'selected' : ''}`} 
        onClick={() => handleDisplayChange('Islands')}
      >
        Ilots de fraîcheur
      </div>
      <div 
        className={`nav-bar-item ${display === 'Fountains' ? 'selected' : ''}`} 
        onClick={() => handleDisplayChange('Fountains')}
      >
        Fontaines à boire
      </div>
      <div className="se-connecter-button">
        <button>Se Connecter</button>
      </div>
    </div>
  );
};

export default NavigationBar;
