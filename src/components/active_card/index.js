import '../../components/active_card/index.css';
import React, { useEffect, useState, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { makeServerCall } from '../../utilities';
import {AppContext} from '../../contexts/app_context'
import Activecard from '../active_card'

function ActiveCard(props) {
  let {user, activeCards, setActiveCards} = useContext(AppContext);
  const {tripObject} = props
  const navigate = useNavigate();
  const [image, setImage] = useState("")
  const [updatedtripName, setUpdatedName] = useState("")
  const [updatedFriendName, setUpdatedFriendName] = useState("")
  const [updatedDate, setUpdatedDate] = useState("")
  const [updatedSummary, setUpdatedSummary] = useState("")
  const [updatedFriendEmail, setUpdatedFriendEmail] = useState("")
  const [emails, setemails] = useState([])
  const [names, setnames] = useState([])
  

  let userId = user._id;

    let list = tripObject.names.map((name, index)=>{
      return(
        <li key={index}>{name}</li>
      )
    })
    let id = tripObject.id
    useEffect(() => {
      const makeCallToServer = async () => {
        try {
          let serverResponse = await axios({
            method: 'GET',
            url: `/single/${id}`
          });
          console.log(serverResponse.data);
          let data = serverResponse.data;
          setImage(data.img);
          console.log(data.img)
          console.log(serverResponse.data.img)
        } catch (error) {
          console.error(error);
        }
      };
      makeCallToServer();
    }, []);

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  }

  const handleEdit = (e) => {
    setFormVisible(!formVisible);
    setOptionsVisible(!optionsVisible);
    console.log(formVisible)
  }
  const inviteFriend = (event) =>{
    event.preventDefault()
    const newPerson = updatedFriendName;
    console.log(newPerson)
  
    if(!names.includes(newPerson)){
       setnames([newPerson, ...names])
    }
    console.log(names)

    const newEmail = updatedFriendEmail;
    console.log(newEmail)
  
    if(!emails.includes(newEmail)){
       setemails([newEmail, ...emails])
    } 
    setUpdatedFriendName("")
    setUpdatedFriendEmail("")
  }
  // const handleChange = (e) =>{
  //   let newValue = 
  // }
  const handleSubmit = (event) =>{ 
    event.preventDefault()
    let trip = tripObject._id
    console.log(trip)
    console.log(updatedtripName)
    
    const updates ={
      tripName: updatedtripName,
      names: names,
      date: updatedDate,
      summary: updatedSummary ,
      emails: emails,
    }
    // delete empty keys
    Object.keys(updates).forEach(key => {
      if (updates[key] === '' || updates[key].length == 0){
        delete updates[key]
      }
    })
    const makeCallToUpdate = async() =>{
      try {
        let serverResponse = await axios.put(`/update_trip/${trip}`, updates)
        console.log(serverResponse.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    const getTrips = async() =>{
      console.log(userId)
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
    makeCallToUpdate();
    getTrips();
    setUpdatedName("")
  }

  const handleDelete = (e) => {
    let trip = tripObject._id
    console.log(trip)
    const makeCallToServer = async() =>{
    let serverResponse = await axios({
    method: 'DELETE',
    url: `/delete/${trip}`
  })
  console.log(serverResponse.data);
  }
 

  const getTrips = async() =>{
    console.log(userId)
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
   makeCallToServer();
   getTrips();
}
console.log(optionsVisible)



  return (
    <div className="active_card">
      <div className="title-ellipsis">
      <h2>{tripObject.tripName}</h2>
        
          <div className="activecard-container">
        <div className="ellipsis" onClick={toggleOptions} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {optionsVisible &&
          <div class="options">
            <ul className="options-ul">
              <li onClick={(event) => handleEdit(event)} >Edit</li>
              <li onClick={(event) => handleDelete(event)} value={tripObject.tripName}>Delete</li>
            </ul>
          </div>
        }
        {formVisible &&
          <form onSubmit = {handleSubmit} className="updatingForm">
            <div onClick={(event) => handleEdit(event)} className="cancel">
            <p>Go Back</p>
          </div>
            <label>
              <input placeholder="Enter updated Trip name" value = {updatedtripName} type="text" name="name" className="name" onChange={event => {setUpdatedName(event.target.value)}}></input>
            </label>
            <label>
              <input placeholder="Enter updated date" onChange={event => {setUpdatedDate(event.target.value)}} value = {updatedDate}></input>
            </label>
            
            <label>
            <textarea onChange={event => {setUpdatedSummary(event.target.value);}} value = {updatedSummary} type="text" name="summary" placeholder='Enter Itenerary/Summary' autoFocus className="updatedSummary"></textarea>
            </label>
            <label>
              <input placeholder="Enter Name of Friend" onChange={event => {setUpdatedFriendName(event.target.value)}} value = {updatedFriendName}></input>
              <input onChange={event => {setUpdatedFriendEmail(event.target.value)}} value={updatedFriendEmail} type="text" name="friendEmail" placeholder='Enter Email of Friend' className="Femail"></input>
              
              <button onClick={inviteFriend} className="invitebtn">Invite friend</button>
            </label><br />
            <br />
            <button className="submit-update">Submit</button>
          </form>
        }
      </div>
        
        </div>

        <div className="info-box">
          <div className="friends_invited">
            <b><p>friend's invited:</p></b>
            <ul className="friendlist">{list}</ul>
          </div>
          <div className="date-price">
            <b>
              <p style={{color: "#FF385C"}}>{tripObject.date}</p>
            </b>
            <p> <b>Total price:</b> ${tripObject.price}</p>
          </div>
          <div className="summary_box">
            <p>{tripObject.summary}</p>
          </div>
        </div>
        <img src={image} id="img"></img>

    </div>
  );
}

export default ActiveCard;