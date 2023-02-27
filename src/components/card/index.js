import './index.css';


const GetCard = (props) => {
   const randomNumber = Math.floor(Math.random() * 10) + 1;
   let cardObject = props.cardObject
return (
     <div className="card-body">
      <img src={cardObject.image_url} className="api-img"></img>
      <p>{cardObject.city_name}</p>
      <p>{cardObject.region}</p>
      <p>{randomNumber} nights  · Mar 6 – 11 </p>
      <p></p>
     </div>  
      
);
}
  
  export default GetCard;