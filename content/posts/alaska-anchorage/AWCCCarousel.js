import React from "react"
import Carousel from 'nuka-carousel/index'

function AWCCCarousel() {
  const conservation_1 = require('./aug27/conservation-1.jpg');
  const conservation_2 = require('./aug27/conservation-2.jpg');
  const conservation_3 = require('./aug27/conservation-3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A grizzly bear eating grass."
          src={conservation_1} />
        <img
          alt="An elk drinking."
          src={conservation_2} />
        <img
          alt="A mountain."
          src={conservation_3} />
    </Carousel>
  )
}

export default AWCCCarousel
