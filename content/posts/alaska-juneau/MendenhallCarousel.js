import React from "react"
import Carousel from 'nuka-carousel/index'
import photoPassTrail from './mendenhall-1.jpg'
import eastGlacierLoop from './mendenhall-2.jpg'
import glacier from './mendenhall-3.jpg'
import waterfall from './waterfall-pic.jpg'

function MendenhallCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="Eric next to a giant waterfall."
          src={waterfall} />
        <img
            alt="Eric and I in front of the Mendenhall Glacier."
            src={glacier} />
        <img
          alt="Trail going toward the glacier."
          src={photoPassTrail} />
        <img
          alt="Bright green mossy rocks and trees on the east glacier loop."
          src={eastGlacierLoop} />
    </Carousel>
  )
}

export default MendenhallCarousel
