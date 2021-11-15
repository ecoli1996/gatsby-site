import React from "react"
import Carousel from 'nuka-carousel/index'
import driftwood_1 from './driftwood-1.jpg'
import driftwood_2 from './driftwood-2.jpg'
import driftwood_3 from './driftwood-3.jpg'

function DriftwoodCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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
