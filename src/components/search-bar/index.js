import './index.css';
import axios from 'axios';
import { useState, useContext} from 'react';
import { AppContext } from '../../contexts/app_context';
import { Link, useNavigate } from 'react-router-dom';
import searchglass from "./images/glass.png"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Card from '../card'
import FriendsPic from "./images/friendspic.png"


function SearchBar() {
  //will be in use later
  let { date, setDate, setcarddata } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState("home");
  const [searchString, setSearchString] = useState("")
   
const navigate = useNavigate();
// const history = useHistory();
//  from search bar
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    // // Create a new Date object
    // const tomorrow= new Date();
    // setEndDate(tomorrow)
    // // Set the date to tomorrow
    // tomorrow.setDate(tomorrow.getDate() + 1);

   
   
     const handleChange = (e) =>{
      let newValue = e.target.value;
      setSearchString(newValue);
     }

     const handleSubmit = (e) => {
      e.preventDefault()
      console.log("submitting!");
      
      // if we don't prevent the default, the page will refresh
      // call express server with the string
      
      makeServerCall(searchString, selectedOption)
      navigate('/');
  };
 //do not use http://localhost:5000/search etc because you will not get a response.
 //also make a build folder when you start a project, it allows for the local host to 
 //this will make a call to the serve with the string we want to search for as a parameter
 //then we will get a reponse back of objects that we have to map through. when we go through each object, we will pull elements we wants displayed in our card.
 //this will be saved to our state called setcarddata. setcarddata will be an array we have access to throughout the app.
     
 const makeServerCall = async (string, accomodation_type) => {
  console.log(string)
      //made a if statement that says if a string giving us a location AND a type isnt passed in then default to searching for homes in atlanta
      //because type will always be passed in because of the state being set to "home", i'm going to omitt
      //the type having to be passed in, only if we do not have a string passed in will we default to atlanta homes
      // if(numberOfGuests < serverResponse.data.max_guests)
      if(!string){
        let serverResponse = await axios({
          method: 'GET',
          url: 'http://localhost:5000/search?location=Atlanta&type=home'
      });
      console.log(serverResponse.data);
      let data = serverResponse.data
      let arrayOfCards = data.map((cardObject, index)=>{
        console.log(cardObject.city)
          return(
          <Link to ={`/single/${cardObject._id}`}  key={cardObject._id}>
            <Card key={index} cardObject={cardObject} />
          </Link>) 
          })
      setcarddata(arrayOfCards)
      setSearchString('');
      }else if(string){
        let serverResponse = await axios({
          method: 'GET',
          url: `/search?location=${string}&type=${accomodation_type}`
      });
      //pull the data out of the response. setcarddata can not take an object only an array. and not an array of objects but an array of components so map through using a card as a structure for what we want to show up on our page
      
      console.log(serverResponse.data);
      let data = serverResponse.data
      let searchInput = data.map((cardObject, index)=>{
        console.log(cardObject.city)
          return(
          <Link to ={`/single/${cardObject._id}`} id="entire-card"  key={cardObject._id}> 
            <Card key={index} cardObject={cardObject} />
          </Link>) 
          })
      setcarddata(searchInput)
      setSearchString('');
    }
      
      
    }
    //showing the popup. toggle true and false shows and hides the popup
    const [showDiv, setShowDiv] = useState(false);
    function handleClick() {
      if(showDiv == false){
        setShowDiv(true);
    } else if (showDiv == true){
        setShowDiv(false);
    }
  }
   
    console.log(selectedOption)
    const Invite = () =>{
      navigate('/tripdetails');
    }
  return (
    <div className="search-area">
      
      
        <form className="bar" onSubmit={(event) => handleSubmit(event)}>
        
          <label>
          <input onChange={(event) => handleChange(event)} value = {searchString} type="text" name="where" placeholder='Where are you going?' className="where"/>
          </label>
          <select className="dropdown" value={selectedOption} onChange={event => {setSelectedOption(event.target.value)}}>
            <option value="home">Home</option>
            <option value="hotel">Hotel</option>
          </select>
          <DatePicker selected={startDate} value={startDate} onChange={(date) => setStartDate(date)}  className="checkin" />
        
          <DatePicker selected={endDate} value={endDate} onChange={(date) => setStartDate(date)} className="checkout" />
          
          <div className="gp" onClick={handleClick}>
              <p><b>Group planning</b></p>
              <p>Invite friends to plan</p>
          </div>
          
          <label>
          <input type="text" name="guestnumber" placeholder='Add # of guests' className="guests"/>
          </label>

          <button className="search-btn"><img src={searchglass}></img></button>
          
        </form>
        {showDiv && <div className="invitefriendspopup"><h2>Book With...</h2><h3 className="friendsletters">Friends</h3><img src={FriendsPic} className="friendspic"></img><button className="invitenow" onClick={Invite}>Invite friends</button></div>}
    </div>
    
  );
}

export default SearchBar;