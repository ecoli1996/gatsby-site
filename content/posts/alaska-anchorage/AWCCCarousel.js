import React from "react"
import Carousel from 'nuka-carousel/index'
import conservation_1 from './aug27/conservation-1.jpg'
import conservation_2 from './aug27/conservation-2.jpg'
import conservation_3 from './aug27/conservation-3.jpg'

function AWCCCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="A grizzly bear eating grass."
          src={conservation_1} />
        <img
          alt="An elk drinking."
          src={conservation_2} />
        <img
          alt="A mountain."
          src={conservation_3} />
    </Carousel>
  )
}

export default AWCCCarousel
