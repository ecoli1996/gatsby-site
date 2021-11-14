import React from "react"
import Carousel from 'nuka-carousel/index'
import dogStatue from './juneau-statue-1.jpg'
import bearStatue from './juneau-statue-2.jpg'
import gnomes from './gnomes.jpg'

function JuneauCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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
