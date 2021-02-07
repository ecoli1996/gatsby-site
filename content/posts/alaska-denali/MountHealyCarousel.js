import React from "react"
import Carousel from 'nuka-carousel/index'

function MountHealyCarousel() {
  const healy_1 = require('./healy-1.jpg');
  const healy_2 = require('./healy-2.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A view from Mount Healy."
          src={healy_1} />
        <img
          alt="Eric and the view from Mount Healy."
          src={healy_2} />
    </Carousel>
  )
}

export default MountHealyCarousel
