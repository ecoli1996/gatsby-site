import React from "react"
import Carousel from 'nuka-carousel/index'

function CharacterStopCarousel() {
  const bears = require('./eric-country-bears.jpg');
  const possum = require('./eric-possum.jpg');
  const sebastian = require('./eric-sebastian.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Eric with the Country Bears."
          src={bears}/>
        <img
          alt="Eric with a possum from Animal Kingdom."
          src={possum} />
        <img
          alt="Eric with Sebastian."
          src={sebastian}
        />
    </Carousel>
  )
}

export default CharacterStopCarousel
