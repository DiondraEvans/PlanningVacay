import './index.css';
import { useState, useEffect} from 'react';
function GetFriends(props) {
const {emails, names} = props
const listOfNames = names.map((name, index) =>{
    return (
        <li key="index">{name}</li>
    )
})
const listOfEmails = emails.map((email, index) =>{
    return (
        <li key="index">{email}</li>
    )
})
  return (
    <div className="box">
        <div className="invited_friendsbox">
            <ul className="list-items">
              <b>Friend's Name:</b>
              {listOfNames}
            </ul>
            
            <ul className= "list-items">
              <b>Friend's Email:</b>
              {listOfEmails}
            </ul>
        </div>
    </div>
  );
}

export default GetFriends;