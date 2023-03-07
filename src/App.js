import Nav from './components/nav';
import SearchBar from './components/search-bar';
import FilterBar from './components/filterbar';
import CardHolder from './components/card_holder';
import { AppContext } from './contexts/app_context';
import { useState, useContext, useEffect } from 'react';
import Card from './components/card'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';


function App() {
 
  let { carddata, setcarddata, names, tripName  } = useContext(AppContext);
     console.log(names)

     useEffect(()=>{
      const makeServerCall = async () => {
        let serverResponse = await axios({
            method: 'GET',
            url: `/search?location=Atlanta&type=home`
        });
        console.log(serverResponse.data);
        let data = serverResponse.data
        let arrayOfCards = data.map((cardObject, index)=>{
          console.log(cardObject.city)
            return(
            <Link to ={`/single/${cardObject._id}`}>
              <Card key={index} cardObject={cardObject} />
            </Link>) 
            })
        setcarddata(arrayOfCards)
      }
      makeServerCall();
     }, []);
//we are setting what we will display in the cardHolder in the searchBar. searchbar now uses setcarddata because its passed down as a prop. so you can set whatever is shown 
//in the cardholder, in the searchbar.
//cardholder takes what is being set and display it using a readOnly file carddata.
//globally cardata is able to manipulated so on the hotel options page, i am setting carddata by grabbing it through AppContext. by setting it there, the readOnly file should change it's state
//once passed down to the card holder on the hotel page.
  return (
    <div className="App">
      <Nav />
      {tripName ? <h2>Your trip: {tripName}</h2> : ""}
      <SearchBar />
      {/* <FilterBar /> */}
      <CardHolder />
      <Footer />
    </div>
  );
}

export default App;