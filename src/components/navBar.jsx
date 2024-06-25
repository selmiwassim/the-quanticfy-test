import React, {useState} from 'react';
import '../index.css';
import { NavLink,Link } from 'react-router-dom';



const NavigationBar = () => {
 

 return (<>
<nav>
    <div className="nav-bar">
      
      <NavLink to="/home" >
        <img 
          src="https://img.freepik.com/vecteurs-libre/guide-cartographique-papier_24877-82055.jpg?t=st=1719223900~exp=1719227500~hmac=f7cdf82e32e60c3dd90a68ed5510a837bcf95db39793231ba6d3ceb517d984ed&w=740" 
          alt="Logo" 
          className="nav-bar-logo"
        />
      </NavLink>
      <div>
      <NavLink to="/islands" >Ilots de fraîcheur</NavLink>
      </div>
      <div>
      <NavLink  to="/fountains" > Fontaines à boire</NavLink>
      </div>
      <div className="se-connecter-button">
        <button>Se Connecter</button>
      </div>
    </div>
    </nav>

    </>
  );
};

export default NavigationBar;
