import { useState, useEffect} from 'react';
import './index.css';



const GetCard = (props) => {
  
   let cardObject = props.cardObject
const [price, setPrice] = useState(0);
  useEffect(() =>{ 

 const randomPrice = Math.floor(Math.random() * 1000) + 50; // generates a random number between 50 and 1050
        setPrice(randomPrice);
  },[])
      
    const randomNumber = Math.floor(Math.random() * 10) + 1;
      
      //  const handleClick = () =>{

      //  }
   



return (
     <div className="card-body" >
      <img src={cardObject.image_url} className="api-img"></img>
      <p>{cardObject.city_name}</p>
      <p>{cardObject.region}</p>
      <p>{randomNumber} nights  · Mar 6 – 11 </p>
      <p>${price}</p>
     </div>  
      
);
}
  
  export default GetCard;