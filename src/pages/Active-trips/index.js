import './index.css';
import Activecard from '../../components/active_card';
import Nav from '../../components/nav'
import React, { useState, useEffect, useContext} from 'react';
import { AppContext } from '../../contexts/app_context';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { makeServerCall } from '../../utilities';
function Activetrips() {

let {user, activeCards, setActiveCards } = useContext(AppContext);
console.log(user._id)
let userId = user._id

  useEffect(()=>{
    const getTrips = async() =>{
      let serverResponse = await makeServerCall(userId);
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
    getTrips();
   
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