import '../../components/active_card/index.css';
import React, { useEffect, useState, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {AppContext} from '../../contexts/app_context'

function ActiveCard(props) {
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
//testing my theory on if we were to set the tripName in the index.js, we would be setting a name that we just made for the most recent card in our active trips list:
// let { tripName } = useContext(AppContext);
// console.log(tripName)
    
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
  const toggleForm = () => {
    setFormVisible(!formVisible);
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
    makeCallToUpdate();
    window.location.reload();
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
  let data = serverResponse.data
  }
  makeCallToServer();
  window.location.reload();
}
console.log(optionsVisible)



  return (
    <div className="active_card">
      <div className="title-ellipsis">
        <h2 className="tripName">{tripObject.tripName}</h2>
          <div class="activecard-container">
        <div class="ellipsis" onClick={toggleOptions} >
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