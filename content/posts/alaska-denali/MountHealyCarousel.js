import React from "react"
import Carousel from 'nuka-carousel/index'
import healy_1 from './healy-1.jpg'
import healy_2 from './healy-2.jpg'

function MountHealyCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="A view from Mount Healy."
          src={healy_1} />
        <img
          alt="Eric and the view from Mount Healy."
          src={healy_2} />
    </Carousel>
  )
}

export default MountHealyCarousel
