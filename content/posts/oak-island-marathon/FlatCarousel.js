import React from "react"
import Carousel from 'nuka-carousel/index'

function FlatCarousel() {
  const flat = require('./flat-photo.jpg');
  const flatZoom = require('./flat-zoom.jpg');
  
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="My flat racing clothes zoomed out"
          src={flat}/>
        <img
          alt="My flat zoomed in on the mask, socks, and gloves."
          src={flatZoom}
        />
    </Carousel>
  )
}

export default FlatCarousel
