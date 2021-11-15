import React from "react"
import Carousel from 'nuka-carousel/index'
import swag1 from './medal.jpg'
import swag2 from './shirt.jpg'

function CooperSwagCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="A medal with a butterfly flying over white and yellow flowers overlaying the Cooper River Bridge."
          src={swag1} />
        <img
          alt="A white T-Shirt with a butterfly flying over white and yellow flowers overlaying the Cooper River Bridge."
          src={swag2} />
    </Carousel>
  )
}

export default CooperSwagCarousel
