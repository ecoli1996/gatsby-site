import React from "react"
import Carousel from 'nuka-carousel/index'

function JuneauCarousel() {
  const dogStatue = require('./juneau-statue-1.jpg');
  const bearStatue = require('./juneau-statue-2.jpg');
  const gnomes = require('./gnomes.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Eric next to a dog statue."
          src={dogStatue} />
        <img
            alt="Eric next to a bear statue."
            src={bearStatue} />
        <img
          alt="Vampire gnomes."
          src={gnomes} />
    </Carousel>
  )
}

export default JuneauCarousel
