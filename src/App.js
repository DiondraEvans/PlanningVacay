import Nav from './components/nav';
import SearchBar from './components/search-bar';
import FilterBar from './components/filterbar';
import CardHolder from './components/card_holder';
import { useState } from 'react';

import './App.css';


function App() {
  const [carddata, setcarddata] = useState("");
   
     

  return (
    <div className="App">
      <Nav />
      <SearchBar setcarddata={setcarddata} />
      <FilterBar />
      <CardHolder setcarddata={setcarddata} carddata={carddata}/>
    </div>
  );
}

export default App;