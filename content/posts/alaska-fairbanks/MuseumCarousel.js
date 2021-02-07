import React from "react"
import Carousel from 'nuka-carousel/index'

function MuseumCarousel() {
  const mon_1 = require('./mon-1.jpg');
  const mon_2 = require('./mon-2.jpg');
  const mon_3 = require('./mon-3.jpg');
  const mon_4 = require('./mon-4.jpg');

  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
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
