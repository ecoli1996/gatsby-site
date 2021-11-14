import React from "react"
import Carousel from 'nuka-carousel/index'
import mon_1 from './mon-1.jpg'
import mon_2 from './mon-2.jpg'
import mon_3 from './mon-3.jpg'
import mon_4 from './mon-4.jpg'

function MuseumCarousel() {

  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="A mummified steppe bison."
          src={mon_1} />
        <img
          alt="A traditional native coat made from animal hide and fur."
          src={mon_2} />
        <img
          alt="Bone from a prehistoric whale."
          src={mon_3} />
        <img
          alt="A tall taxidermied grizzly bear."
          src={mon_4} />
    </Carousel>
  )
}

export default MuseumCarousel
