import React from "react"
import Carousel from 'nuka-carousel/index'

function ResurrectCarousel() {
  const resurrect = require('./aug27/resurrect.jpg');
  const mable = require('./aug27/mabel-bean.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Beautiful chapel turned coffee shop."
          src={resurrect} />
        <img
          alt="A big fluffy dog with curly hair named Mable Bean."
          src={mable} />
    </Carousel>
  )
}

export default ResurrectCarousel
