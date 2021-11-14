import React from "react"
import Carousel from 'nuka-carousel/index'
import eklutna_1 from './aug28/eklutna-1.jpg'
import eklutna_2 from './aug28/eklutna-2.jpg'

function EklutnaCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="A Orthodox Christian Cross."
          src={eklutna_1} />
        <img
          alt="A wooden chapel."
          src={eklutna_2} />
    </Carousel>
  )
}

export default EklutnaCarousel
