import React from "react"
import Carousel from 'nuka-carousel/index'

function SwagCarousel() {
  const medalClosed = require('./medal-1.jpg');
  const medalOpen = require('./medal-2.jpg');
  const jacketFront = require('./jacket-1.jpg');
  const jacketBack = require('./jacket-2.jpg')
  
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="The medal. A sea turtle engraved with Oak Island Marathon 26.2 and sea creatures."
          src={medalClosed}/>
        <img
          alt="The medal is a locket, and this shows it opened with a lighthouse inside."
          src={medalOpen}
        />
        <img
          alt="The front of the finisher's jacket. It's just black with a hood and gray lining on the arms."
          src={jacketFront}
        />
        <img
          alt="The back of the finisher's jacket. It has 'FINISHER' written on the bottom."
          src={jacketBack}
        />
    </Carousel>
  )
}

export default SwagCarousel
