import React from "react"
import Carousel from 'nuka-carousel/index'
import triplelakes_1 from './triplelakes-1.jpg'
import triplelakes_2 from './triplelakes-2.jpg'
import triplelakes_3 from './triplelakes-3.jpg'

function TripleLakesCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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
