import React from "react"
import Carousel from 'nuka-carousel/index'

function TripleLakesCarousel() {
  const triplelakes_1 = require('./triplelakes-1.jpg');
  const triplelakes_2 = require('./triplelakes-2.jpg');
  const triplelakes_3 = require('./triplelakes-3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A view of one of the lakes from a high point of elevation."
          src={triplelakes_1} />
        <img
          alt="A view of the second lake from up high."
          src={triplelakes_2} />
        <img
          alt="A view of the lake at the edge of the water."
          src={triplelakes_3} />
    </Carousel>
  )
}

export default TripleLakesCarousel
