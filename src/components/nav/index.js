import './index.css';
import React from 'react';
function Nav() {

  return (
    <div className="nav">
      <div className="logo">
        <p>Logo</p>
      </div>
      <ul className="links">
        <li>Places to stay</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="account">
        <p>account</p>
      </div>
    </div>
  );
}

export default Nav;