import './index.css';
import axios from 'axios';
import { useState } from 'react';
import searchglass from "./images/glass.png"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Card from '../card'


function SearchBar(props) {
  let {setcarddata} = props
    const [startDate, setStartDate] = useState(new Date());
    const [searchString, setSearchString] = useState("")

     const handleChange = (e) =>{
      let newValue = e.target.value;
      setSearchString(newValue)
     }

     const handleSubmit = (e) => {
      e.preventDefault()
      console.log("submitting!");
      // if we don't prevent the default, the page will refresh
      // call express server with the string
      makeServerCall(searchString)
  };
 //do not use http://localhost:5000/search etc because you will not get a response.
 //also make a build folder when you start a project, it allows for the local host to 
 //this will make a call to the serve with the string we want to search for as a parameter
 //then we will get a reponse back of objects that we have to map through. when we go through each object, we will pull elements we wants displayed in our card.
 //this will be saved to our state called setcarddata. setcarddata will be an array we have access to throughout the app.
     const makeServerCall = async (string) => {
      let serverResponse = await axios({
          method: 'GET',
          url: `/search/${string}`
      });
      //pull the data out of the response. setcarddata can not take an object only an array. and not an array of objects but an array of components so map through using a card as a structure for what we want to show up on our page
      // setcarddata(serverResponse)
      console.log(serverResponse.data);
      let arrayOfCards = serverResponse.data.map((cardObject, index)=>{
          return(<Card key={index} cardObject={cardObject}/>) 
          })
      setcarddata(arrayOfCards)
      setSearchString('');
  }

  return (
    <div className="search-area">
      
      
        <form className="bar" onSubmit={(event) => handleSubmit(event)}>
        
          <label>
          <input onChange={(event) => handleChange(event)} value = {searchString} type="text" name="where" placeholder='Where are you going?' className="where"/>
          </label>
          
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="checkin" />
        
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="checkout" />
          
          <div className="gp">
              <p>Group planning</p>
              <p>Invite friends to plan</p>
          </div>
          
          <label>
          <input type="text" name="guestnumber" placeholder='Add # of guests' className="guests"/>
          </label>

          <button className="search-btn"><img src={searchglass}></img></button>
          
        </form>
      
    </div>
    
  );
}

export default SearchBar;