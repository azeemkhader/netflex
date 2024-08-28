import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';


import { action , orginals , romance } from './urls';

function App() {
  return (
    <div className="App">
       <Header />
       <Banner/>
       <Cards title='Netflix Orginals' url={orginals} />
       <Cards title='Action Movies' isSmall url={action} />
       <Cards title='Romance' isSmall url={romance} />

      

    </div>
  );
}

export default App;