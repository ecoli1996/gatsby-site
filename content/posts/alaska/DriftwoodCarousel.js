import React from "react"
import Carousel from 'nuka-carousel/index'

function DriftwoodCarousel() {
  const driftwood_1 = require('./driftwood-1.jpg');
  const driftwood_2 = require('./driftwood-2.jpg');
  const driftwood_3 = require('./driftwood-3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Hazy outdoor view from the Driftwood Lodge."
          src={driftwood_1} />
        <img
          alt="Another hazy outdoor view from the Driftwood Lodge."
          src={driftwood_2} />
        <img
          alt="Another hazy outdoor view from the Driftwood Lodge, but this time with feeling."
          src={driftwood_3} />
    </Carousel>
  )
}

export default DriftwoodCarousel
