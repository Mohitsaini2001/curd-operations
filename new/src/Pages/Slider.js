import React from 'react'
import "./slider.css"

function Slider(props) {
  return (
    <>
      
      <div className='myslider'>
      <img src={props.Idata} height='200px' width='300px' alt='..'/>
      </div>
    </>
  )
}

export default Slider
