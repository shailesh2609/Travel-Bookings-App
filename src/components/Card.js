import React, { useState } from 'react'
import "./Card.css"


export const Card = ({tour ,tours,settours}) => {
    const [Readmore,setReadmore] = useState(false);
    const description = `${tour.info.substring(0,200)}...`
    function morehandler(params) {
        setReadmore(!Readmore)
    }
    function removehandler(params) {
        const newtours = tours.filter((x)=> x.id !== tour.id);
        settours(newtours);
        
    }
  return (
    <div className='card'>

    <img src={tour.image} className='image' width={320} height={290} alt='889'/>  
   <div className='tour-para'>
    <h4 className='tour-price'>{tour.price}</h4>
    <h2 className='tour-name'>{tour.name}</h2>
    <p className='tour-des'>{Readmore ? `${tour.info}`: `${description}`}
    <span className='read-more' onClick={morehandler}>
        {Readmore ? "show less" : "read more"}
    </span>
    </p>
   </div>
   <button className='remove-btn' onClick={removehandler}>
    Not Interested
   </button>
    </div>
  )

}