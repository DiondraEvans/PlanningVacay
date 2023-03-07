import './index.css';
import React, { useState } from 'react';
function aboutCard(props) {
const {accomodation} = props
  return (
    <div className="section_one">
        <h1>{accomodation.accomodation_name}</h1> 
        <h2 className="details">{accomodation.city} , {accomodation.country}</h2> 
        <h3 className="details">{accomodation.max_guests} guests · {accomodation.bed} bedrooms · {accomodation.baths} baths</h3>
      <p className="paragraph">{accomodation.description}</p>
    </div>
  );
}

export default aboutCard;