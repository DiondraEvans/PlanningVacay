import { useState, useEffect} from 'react';
import './index.css';



const GetHotelCard = (props) => {
  
   let object = props.object
const [price, setPrice] = useState(0);

    const randomNumber = Math.floor(Math.random() * 10) + 1;
      
      //  const handleClick = () =>{

      //  }
   



return (
     <div className="card-body" >
      <img src={object.max_1440_photo_url} className="api-img"></img>
      <p>{object.hotel_name}</p>
      <p>{object.city}</p>
      <p>${object.price_breakdown.all_inclusive_price}/night</p>
      <p>{randomNumber} nights  · Mar 6 – 11 </p>
     </div>  
      
);
}
  
  export default GetHotelCard;