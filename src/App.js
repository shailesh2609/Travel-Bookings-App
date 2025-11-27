import React, { useState } from 'react'
import { Tours } from './components/Tours'
import data from  "./data"
import  "./App.css"

export const App = () => {
  const [tours,settours] = useState(data);
  
  return (
    <div className='tourism' >
    <h1 className='heading'>Chle Ghumne</h1>
    <Tours tours ={tours} settours={settours}/>
    
    </div>
  )
}