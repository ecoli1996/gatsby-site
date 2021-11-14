import React from "react"
import Carousel from 'nuka-carousel/index'
import resurrect from './aug27/resurrect.jpg'
import mable from './aug27/mabel-bean.jpg'

function ResurrectCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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
