import React from "react"
import Carousel from 'nuka-carousel/index'

function CooperSwagCarousel() {
  const swag1 = require('./medal.jpg');
  const swag2 = require('./shirt.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A medal with a butterfly flying over white and yellow flowers overlaying the Cooper River Bridge."
          src={swag1} />
        <img
          alt="A white T-Shirt with a butterfly flying over white and yellow flowers overlaying the Cooper River Bridge."
          src={swag2} />
    </Carousel>
  )
}

export default CooperSwagCarousel
