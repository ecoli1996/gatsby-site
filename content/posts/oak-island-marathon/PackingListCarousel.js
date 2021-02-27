import React from "react"
import Carousel from 'nuka-carousel/index'

function PackingListCarousel() {
  const myList = require('./elaina-packing.jpg');
  const ericList = require('./eric-packing.jpg');
  
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="My marathon packing list. It's just a basic list with checkboxes."
          src={myList}/>
        <img
          alt="Eric's marathon packing list. His is a drawing of himself with all the clothes labeled. Much more artsy and cooler than mine!"
          src={ericList}
        />
    </Carousel>
  )
}

export default PackingListCarousel
