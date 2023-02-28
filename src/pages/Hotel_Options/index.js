import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardHolder from '../../components/card_holder'
import HotelCard from "../../components/hotel_cards"
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../contexts/app_context';
import Nav from '../../components/nav';
import SearchBar from '../../components/search-bar';
import FilterBar from '../../components/filterbar';


function GetSingleVacationSpot() {
  let { carddata, setcarddata  } = useContext(AppContext);
  //What you name the parameter in index.js will need to be named the same here. Use the same parameter nae so it will be recognized
  const { id } = useParams();
  console.log(id)
  //make a fetch request using the itemid you go from the parameter
  useEffect(() =>{
    const makeServerCall = async() =>{
      let serverResponse = await axios({
        method: 'GET',
        url: `/hotelOptions/${id}`
      });
      console.log(serverResponse.data.result)
      let searchResult = serverResponse.data.result
      let newcardArray = searchResult.map((object) =>{
        return(<HotelCard object={object}/>)
      })
      setcarddata(newcardArray)
    }
    makeServerCall();
  },[])

  return (
    <div className="Single">
      <Nav />
      <SearchBar setcarddata={setcarddata} />
      <FilterBar />
      <CardHolder carddata={carddata}/>
    </div>
  );
}

export default GetSingleVacationSpot;