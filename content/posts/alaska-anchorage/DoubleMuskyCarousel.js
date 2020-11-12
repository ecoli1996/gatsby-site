import React from "react"
import Carousel from 'nuka-carousel/index'

function DoubleMuskyCarousel() {
  const double_musky_1 = require('./aug27/double-musky-food-1.jpg');
  const double_musky_2 = require('./aug27/double-musky-food-2.jpg');
  const double_musky_3 = require('./aug27/double-musky-food-3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Trees on the Winner Creek Trail with the sunlight peeking through."
          src={double_musky_2} />
        <img
          alt="Trees on the Winner Creek Trail with the sunlight peeking through."
          src={double_musky_1} />
        <img
          alt="A creek running over some rocks."
          src={double_musky_3} />
    </Carousel>
  )
}

export default DoubleMuskyCarousel
