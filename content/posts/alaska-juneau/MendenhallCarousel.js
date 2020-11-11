import React from "react"
import Carousel from 'nuka-carousel/index'

function MendenhallCarousel() {
  const photoPassTrail = require('./mendenhall-1.jpg');
  const eastGlacierLoop = require('./mendenhall-2.jpg');
  const glacier = require('./mendenhall-3.jpg');
  const waterfall = require('./waterfall-pic.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
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
