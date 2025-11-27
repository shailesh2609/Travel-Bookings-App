import React from 'react'
import { Card } from './Card'
import data from '../data'
import "./Tours.css"


export const Tours = ({tours,settours}) => {
  function rhandler(params) {
    settours(data);
  }

  return (
   <div className='tours-details'>
   {
    tours.length === 0? ( <div className='refresh-btn'><button className='btn' onClick={rhandler}>refresh</button></div>) : (
      <div className='alltours'>
      {
     tours.map((tour) => {
      return <Card tour={tour} tours={tours} settours={settours}/>
     })
      }
    </div>
    )
   }
    
    
    
  </div>
  )
}