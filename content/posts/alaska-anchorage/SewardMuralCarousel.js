import React from "react"
import Carousel from 'nuka-carousel/index'

function SewardMuralCarousel() {
  const mural_1 = require('./aug27/mural-1.jpg');
  const mural_2 = require('./aug27/mural-2.jpg');
  const mural_3 = require('./aug27/mural-3.jpg');
  const mural_4 = require('./aug27/mural-4.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A mural of a dog sled."
          src={mural_2} />
        <img
          alt="A mural of a mountain with a moon in the background."
          src={mural_3} />
        <img
          alt="A mural that looks like a map with boats, stars, and flowers in the water."
          src={mural_4} />
        <img
          alt="A mural of people overlooking icy blue water with fjords in the background."
          src={mural_1} />
    </Carousel>
  )
}

export default SewardMuralCarousel
