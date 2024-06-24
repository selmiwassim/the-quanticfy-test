import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayIslands from './components/displayIslands'
import DisplayFountains from './components/displayFountain' 
import NavigationBar from './components/navBar'
import HomePage from './components/homePage';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/islands" element={<DisplayIslands />} />
          <Route path="/fountains" element={<DisplayFountains />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
