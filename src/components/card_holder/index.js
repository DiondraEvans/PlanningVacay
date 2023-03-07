import './index.css';
import { useEffect, useState, useContext } from 'react';
import Card from '../card'
import axios from 'axios';
import { AppContext } from '../../contexts/app_context';
function GetCardHolder() {
  let { carddata } = useContext(AppContext);
return (
     <div className="container-card">
       {carddata}
     </div>  
      
);
}
  
  export default GetCardHolder;