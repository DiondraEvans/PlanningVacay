import './index.css';
import axios from 'axios';
import React, { useEffect, useState, useContext  } from 'react';
import { AppContext } from '../../contexts/app_context';
import { Link, useNavigate } from 'react-router-dom';
function GetReservedTrip(props) {
    const navigate = useNavigate();
    const {accomodation} = props
    let { tripName, names, date, summary, emails, setAccomodation, setName, setDate, setSummary, setemails, setnames } = useContext(AppContext);
    let id = accomodation._id
    let price = accomodation.price
    console.log(tripName)
    console.log(accomodation._id)
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submitting!");
        const trip = {
        tripName,
        names,
        date,
        summary,
        emails,
        id,
        price
        }
        const makePost = async () => {
            try {
                let serverResponse = await axios({
                    method: 'POST',
                    url: "/create_trip",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify(trip)
                });
                console.log(serverResponse)
            } catch (error) {
                console.error(error);
            }
        };
        makePost();
        //reset values here:
        setName("")
        setDate("")
        setSummary("")
        navigate('/activetrips');
    }
  return (
    <div className="ReservedTripBox">
    <h3>Total price:</h3>
    <p> ${accomodation.price}</p>
    <button className="res-btn" onClick={(event) => handleSubmit(event)}>Reserve</button>
    </div>
  );
}

export default GetReservedTrip;