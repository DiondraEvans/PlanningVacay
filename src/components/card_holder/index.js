import './index.css';
import { useEffect, useState, useContext } from 'react';
import Card from '../card'
import axios from 'axios';
import { AppContext } from '../../contexts/app_context';
function GetCardHolder(prop) {
  let { carddata } = prop;
  // useContext(AppContext);
return (
     <div className="container-card">
       {carddata}
     </div>  
      
);
}
  
  export default GetCardHolder;