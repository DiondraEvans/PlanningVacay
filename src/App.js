import Nav from './components/nav';
import SearchBar from './components/search-bar';
// import FilterBar from './components/filterbar';
import CardHolder from './components/card_holder';
import { AppContext } from './contexts/app_context';
import { useState, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Card from './components/card'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';


function App() {
 
  let {  names, tripName, carddata, setcarddata  } = useContext(AppContext);
  const mounted = useRef(false);
     console.log(names)
    let {search} = useParams();
  //useEffect will run no matter what when it is first mounted. because we have a conditional sayin gif we are searching using our search bar
  //from the single vacation page and it will direct us back to the home page with a parameter, if that parameter is present in the search bar an 
  //automatic api cal will not be made to the server to generate data using useEffect unless there is no parameter in the URL. the issue i was having before is that useNavigate
  //was unmounting my App.js and when I return back to it useEffect would do an api call because it was being mounted again when my app.js was back on my DOM.
  //so to fix that i used a parameter to navigate back to the app.js and if that parameter is present when use effect runs, it will not make an automatic api call.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: '/search?location=Atlanta&type=home'
        });
        console.log(response.data);
        let data = response.data
        let arrayOfCards = data.map((cardObject, index) => {
          console.log(cardObject.city)
          return (
            <Link to={`/single/${cardObject._id}`} key={index}>
              <Card key={cardObject._id} cardObject={cardObject} />
            </Link>
          )
        })
        setcarddata(arrayOfCards)
      } catch (error) {
        console.error(error);
      }
    }
  
    if (!search) {
      fetchData();
    }
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
      <CardHolder carddata={carddata} setcarddata={setcarddata}/>
      <Footer />
    </div>
  );
}

export default App;