import React , {useState} from 'react';
import PreNavbar from './components/FirstNav';
import Navbar from './components/Navbar';
import './App.css';
import Game from './components/Game';
 import Cart from './components/Cart';



function App() {
  return (
    <div>
      <PreNavbar/>
     <Navbar/>
      <Game/>
      {/* <Cart/> */}
    </div>
  );
}

export default App;




	
		
