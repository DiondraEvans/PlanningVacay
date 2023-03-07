import './index.css';
import Image from '../nav/images/windbnb_logo.png'
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
function Nav() {

  return (
    <div className="navbar">
      <div className="logo">
        <Link to ={`/`}>
          <img src={Image} style={{width: "120px", height: "79px"}}></img>
        </Link>
      </div>
      <ul className="links">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/activetrips'}>Active trips</Link></li>
        <li>Online Experiences</li>
      </ul>
      <div className="account">
        <p>account</p>
      </div>
    </div>
  );
}

export default Nav;