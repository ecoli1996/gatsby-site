import React from "react"
import Carousel from 'nuka-carousel/index'

function CharliePostCarousel() {
  const medal = require('./medal-close.jpeg');
  const hoodie = require('./hoodie.jpeg');
  const lanyard = require('./medal-lanyard.jpeg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Closeup of the medal. It shows a teal and yellow medal with the words Charlie Post Classic engraved overlaying a lighthouse."
          src={medal} />
        <img
          alt="A lightweight green hoodie with neon yellow drawstrings. It has Charlie Post Classic written in neon yellow in the center of the hoodie overlaying a navy blue lighthouse."
          src={hoodie} />
        <img
          alt="The lanyard part of the medal which is a teal color with Charlie Post Classic written in neon yellow letters repeating around it."
          src={lanyard} />
    </Carousel>
  )
}

export default CharliePostCarousel
