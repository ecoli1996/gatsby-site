import React from "react"
import Carousel from 'nuka-carousel/index'

function Aug28Carousel() {
  const aug28_1 = require('./aug28/aug28-1.jpg');
  const aug28_2 = require('./aug28/aug28-2.jpg');
  const aug28_3 = require('./aug28/aug28-3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="The Matanuska Glacier."
          src={aug28_1} />
        <img
          alt="Eklutna spirit houses."
          src={aug28_2} />
        <img
          alt="A mountain and a river."
          src={aug28_3} />
    </Carousel>
  )
}

export default Aug28Carousel
