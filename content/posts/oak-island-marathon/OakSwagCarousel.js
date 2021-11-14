import React from "react"
import Carousel from 'nuka-carousel/index'
import medalClosed from './medal-1.jpg'
import medalOpen from './medal-2.jpg'
import jacketFront from './jacket-1.jpg'
import jacketBack from './jacket-2.jpg'

function OakSwagCarousel() {
  
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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

export default OakSwagCarousel
