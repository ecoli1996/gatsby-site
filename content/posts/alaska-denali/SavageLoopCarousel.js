import React from "react"
import Carousel from 'nuka-carousel/index'

function SavageLoopCarousel() {
  const savage_1 = require('./savage-1.jpg');
  const savage_2 = require('./savage-2.jpg');
  const savage_3 = require('./savage-3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A swampy section of the loop."
          src={savage_1} />
        <img
          alt="The beautiful river with big round rocks surrounding it."
          src={savage_2} />
        <img
          alt="Another swampy area with a mountain in the background."
          src={savage_3} />
    </Carousel>
  )
}

export default SavageLoopCarousel
