import React from "react"
import Carousel from 'nuka-carousel/index'

function EklutnaCarousel() {
  const eklutna_1 = require('./aug28/eklutna-1.jpg');
  const eklutna_2 = require('./aug28/eklutna-2.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A Orthodox Christian Cross."
          src={eklutna_1} />
        <img
          alt="A wooden chapel."
          src={eklutna_2} />
    </Carousel>
  )
}

export default EklutnaCarousel
