import React from 'react'
import Slider from './Slider'
import { Carousel } from '@trendyol-js/react-carousel';
import './allpages.css'





function Home() {
  return (
    <>
  <Carousel show={3.5} slide={3} swiping={true} className='md-20'> 
<Slider Idata='images/h.jpg'/>
<Slider Idata='images/h2.jpg'/>
<Slider Idata='images/h3.jpg'/>
<Slider Idata='images/h4.jpg'/>
<Slider Idata='images/h5.jpg'/>
<Slider Idata='images/h6.jpg'/>
<Slider Idata='images/h7.jpg'/>

  </Carousel>

 

  </>
  )
}

export default Home
