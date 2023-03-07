import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';



const GetInviteForm = (props) => {
    const navigate = useNavigate();
  const {tripName, setName,date, setDate, summary, setSummary, friendName, setFriendName,friendEmail, setFriendEmail, emails, setemails, names, setnames} = props

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(tripName, date, summary, friendName, friendEmail, names, emails )
    //that the default action that belongs to the event will not occur.
    //such as clearing for a new input to be passed into the setName function
    const newPerson = friendName;
    console.log(newPerson)
  
    if(!names.includes(newPerson)){
       setnames([newPerson, ...names])
    }
    console.log(names)

    const newEmail = friendEmail;
    console.log(newEmail)
  
    if(!emails.includes(newEmail)){
       setemails([newEmail, ...emails])
    }
    console.log(emails)
    // setName("")
    // setDate("")
    // setSummary("")
    setFriendName("")
    setFriendEmail("")
  }
  const NextPage = () =>{
    navigate('/');
  }
return (
     <div className="form">
      <form onSubmit = {handleSubmit}>
        <label>
        <p>Trip Name:</p>
            <input value = {tripName} id="inputs" type="text" name="name" placeholder='trip name' className="name" onChange={event => {
          setName(event.target.value);
        }}></input>
        </label>
        <label>
        <p>date</p>
            <input onChange={event => {
          setDate(event.target.value);
        }} value = {date} type="text" name="date" placeholder='Enter date' id="inputs" className="date"></input>
        </label>
        <label>
            <p>Itenerary/Summary</p>
            <textarea onChange={event => {
          setSummary(event.target.value);
        }} value = {summary} type="text" name="summary" placeholder='Enter Itenerary/Summary' id="inputs" autoFocus className="summary"></textarea>
        </label>
        
            <label>
                <p id="invite-input">Let's Invite Friends on this trip</p>
                <input onChange={event => {setFriendName(event.target.value)}}value={friendName} type="text" name="friendName" id="inputs" placeholder='Enter Name of Friend' className="Fname"></input>
                <input onChange={event => {setFriendEmail(event.target.value)}} value={friendEmail} type="text" name="friendEmail" id="inputs" placeholder='Enter Email of Friend' className="Femail"></input>
            </label>


        <button className="invitebtn">Invite</button>
      </form>
      <br />
      <button onClick={NextPage} className="submit-update" id="submit-form-invite">Next Page</button>
     </div>  
      
);
}
  
  export default GetInviteForm;