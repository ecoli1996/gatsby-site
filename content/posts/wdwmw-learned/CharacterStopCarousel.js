import React from "react"
import Carousel from 'nuka-carousel/index'
import bears from './eric-country-bears.jpg'
import possum from './eric-possum.jpg'
import sebastian from './eric-sebastian.jpg'

function CharacterStopCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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
