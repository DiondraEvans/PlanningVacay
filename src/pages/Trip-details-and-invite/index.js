import './index.css';
import { AppContext } from '../../contexts/app_context';
import { useState, useContext } from 'react';
import InviteForm from '../../components/Invite_form';
import InvitedFriends from '../../components/InvitedFriends'
import Nav from '../../components/nav'
import { Outlet } from 'react-router-dom';
function Tripdetails() {
  let {  tripName, setName,
    date, setDate,
    summary, setSummary, 
    friendName, setFriendName,
    friendEmail, setFriendEmail,
    emails, setemails,
    names, setnames  } = useContext(AppContext);

  return ( 
  <div>
      <div className="trip-details-and-invite">
        <Nav />
        <div className="header-step">
          <h3>Group planning Step 1: Invite friends to your trip</h3>
        </div>
        <div className="trip">
          <InviteForm className="form" tripName = {tripName} setName={setName} date={date} setDate={setDate} summary={summary} setSummary={setSummary} friendName ={friendName} setFriendName={setFriendName} friendEmail ={friendEmail} setFriendEmail={setFriendEmail} emails={emails}
          setemails={setemails} names={names} setnames={setnames}/>
          <InvitedFriends emails={emails} setemails={setemails} names={names} setnames={setnames}/>
        </div>
      </div>
      <Outlet />
  </div>
  );
}

export default Tripdetails;