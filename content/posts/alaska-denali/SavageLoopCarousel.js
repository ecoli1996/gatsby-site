import React from "react"
import Carousel from 'nuka-carousel/index'
import savage_1 from './savage-1.jpg'
import savage_2 from './savage-2.jpg'
import savage_3 from './savage-3.jpg'

function SavageLoopCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="A swampy section of the loop."
          src={savage_1} />
        <img
          alt="The beautiful river with big round rocks surrounding it."
          src={savage_2} />
        <img
          alt="Another swampy area with a mountain in the background."
          src={savage_3} />
    </Carousel>
  )
}

export default SavageLoopCarousel
