import React from "react"
import Carousel from 'nuka-carousel/index'
import medal from './medal-close.jpeg'
import shirt from './shirt.jpeg'
import lanyard from './medal-full.jpeg'

function WDWCarouselSwag() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="Closeup of the medal. It shows a gold medal with Donalad Duck wunning in navy blue shirt and light blue shorts."
          src={medal}/>
        <img
          alt="A navy blue thin long sleeve shirt. It has the medal face enlarged on the shirt with Spaceship Earth and Cinderella's Castle on the sleeve."
          src={shirt} />
        <img
          alt="The lanyard part of the medal which is navy blue with Donald Duck running across light blue and orange lines."
          src={lanyard}
        />
    </Carousel>
  )
}

export default WDWCarouselSwag
