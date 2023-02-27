import './index.css';
import { useEffect, useState } from 'react';
import Card from '../card'
import axios from 'axios';

function GetCardHolder(props) {
   let {carddata} = props
   let {setcarddata} = props
    // useEffect(() =>{
    //     const makingacall = async () => {
    //                 let serverResponse = await axios({
                      
    //                     method: 'GET',
    //                     url: 'http://localhost:5000/search/Atlanta'
                        
    //                   })
                    
            
    //             console.log(serverResponse)
    //             let data = serverResponse.data
    //             //using state to make data global
             
    //             let arrayOfCards = data.map((cardObject, index)=>{
    //               return(<Card key={index} cardObject={cardObject}/>) 
    //             })
    //             setcarddata(arrayOfCards)
    //     }
    //     makingacall();
    //   }, [])
console.log(carddata)
  //  let results = carddata.map((cardObject, index)=>{
  //   return(<Card key={index} cardObject={cardObject}/>) 
  // })
  // setcarddata(results)
          
              
return (
     <div className="container-card">
       {carddata}
     </div>  
      
);
}
  
  export default GetCardHolder;