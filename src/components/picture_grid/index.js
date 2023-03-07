import { useState, useEffect} from 'react';
import './index.css';



const GetPictureGrid = (props) => {
  
   let accomodation = props.accomodation
const [price, setPrice] = useState(0);

    const randomNumber = Math.floor(Math.random() * 10) + 1;
      
      //  const handleClick = () =>{

      //  }
   



return (
    <div className="a_flex" >
        <div className="main_pic">
            <img src={accomodation.img} id="img1"></img>
        </div>
        <div className="four_pic_grid">
            <img src={accomodation.img2} id="img2"></img>
            <img src={accomodation.img3} id="img3"></img>
            <img src={accomodation.img4} id="img4"></img>
            <img src={accomodation.img5} id="img5"></img>
        </div>
    </div>  
      
);
}
  
  export default GetPictureGrid;