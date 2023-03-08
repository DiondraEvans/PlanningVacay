import './index.css';
import React, { useEffect, useState, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Footer() {
 



  return (
    <div className="footer">
        <p>Website made by Diondra Evans</p>
        <p><b>Find me or my work on:</b></p>
        <ul>
          <li><a href="https://www.linkedin.com/in/diondra-e/">LinkedIn</a></li>
          <li><a href="https://diondraj.github.io">Portfolio</a></li>
        </ul>
    </div>
  );
}

export default Footer;