import './index.css';
import Activecard from '../../components/active_card';
import Nav from '../../components/nav'
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Activetrips() {
const [activeCards, setActiveCards] = useState("")
  useEffect(()=>{
  const makeServerCall = async () => {
    let serverResponse = await axios({
        method: 'GET',
        url: `http://localhost:5000/get_trips`
    });
    console.log(serverResponse)
    let dataRetrieved = serverResponse.data
    console.log(dataRetrieved)
    let arrayOfActiveTrips = dataRetrieved.map((tripObject, _id, index) =>{
      console.log(tripObject.tripName)
      return(
        <Activecard className="index" key={_id} tripObject={tripObject}/>
      )
    })
    setActiveCards(arrayOfActiveTrips)
  }
  makeServerCall();
  }, []);
  return (
    <div className="active">
      <Nav />
      <h1>Your Active trips page</h1>
      <div className="active_grid">
        {activeCards}
      </div>
      <Outlet />
    </div>
  );
}

export default Activetrips;