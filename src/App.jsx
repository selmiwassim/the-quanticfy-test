import { useState } from 'react'

import DisplayIslands from './components/displayIslands'
import DisplayFountains from './components/displayFountain' 
import NavigationBar from './components/navBar'
import HomePage from './components/homePage';


const App = () => {
  const [display, setDisplay] = useState('Home'); 

  return (
    <div>
      <NavigationBar display={display} setDisplay={setDisplay} />
      {display === 'Islands' ? <DisplayIslands /> : display === 'Fountains'  ? <DisplayFountains /> : <HomePage/>}
    </div>
  );
};

export default App
