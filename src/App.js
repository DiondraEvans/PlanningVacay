import Nav from './components/nav';
import SearchBar from './components/search-bar';
import FilterBar from './components/filterbar';
import CardHolder from './components/card_holder';
import { AppContext } from './contexts/app_context';
import { useState, useContext } from 'react';

import './App.css';


function App() {
 
  let { carddata, setcarddata  } = useContext(AppContext);
     
//we are setting what we will display in the cardHolder in the searchBar. searchbar now uses setcarddata because its passed down as a prop. so you can set whatever is shown 
//in the cardholder, in the searchbar.
//cardholder takes what is being set and display it using a readOnly file carddata.
//globally cardata is able to manipulated so on the hotel options page, i am setting carddata by grabbing it through AppContext. by setting it there, the readOnly file should change it's state
//once passed down to the card holder on the hotel page.
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