import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
export default function Shipping() {
  return (
    <div>
      <Navbar/>
        <div className="min-h-screen flex flex-col ml-5">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Dispatched</li>
          <li className="step step-primary">Reached Hub1</li>
          <li className="step">Reached Hub2</li>
          <li className="step">Out for delivery</li>
        </ul>
      </div>
      <div className='items-baseline'>
        <Footer/>
      </div>
      
    </div>
  )
}

