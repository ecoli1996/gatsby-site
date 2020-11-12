import React from "react"
import Carousel from 'nuka-carousel/index'

function FlattopCarousel() {
  const flattop_1 = require('./aug26/flattop-1.jpg');
  const flattop_2 = require('./aug26/flattop-2.jpg');
  const flattop_3 = require('./aug26/flattop-3.jpg');
  const flattop_4 = require('./aug26/flattop-4.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Beautiful amber, yellow, and red foliage."
          src={flattop_3} />
        <img
          alt="A view of the Flattop Mountain peak from the bottom."
          src={flattop_1} />
        <img
          alt="Looking out onto Anchorage from the Flattop Trail."
          src={flattop_2} />
        <img
          alt="Eric next to a winding and twisting tree."
          src={flattop_4} />
    </Carousel>
  )
}

export default FlattopCarousel
