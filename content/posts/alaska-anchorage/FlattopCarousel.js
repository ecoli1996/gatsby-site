import React from "react"
import Carousel from 'nuka-carousel/index'
import flattop_1 from './aug26/flattop-1.jpg'
import flattop_2 from './aug26/flattop-2.jpg'
import flattop_3 from './aug26/flattop-3.jpg'
import flattop_4 from './aug26/flattop-4.jpg'

function FlattopCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="Beautiful amber, yellow, and red foliage."
          src={flattop_3} />
        <img
          alt="A view of the Flattop Mountain peak from the bottom."
          src={flattop_1} />
        <img
          alt="Looking out onto Anchorage from the Flattop Trail."
          src={flattop_2} />
        <img
          alt="Eric next to a winding and twisting tree."
          src={flattop_4} />
    </Carousel>
  )
}

export default FlattopCarousel
