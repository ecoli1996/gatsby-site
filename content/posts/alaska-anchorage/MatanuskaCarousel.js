import React from "react"
import Carousel from 'nuka-carousel/index'

function MatanuskaCarousel() {
  const matanuska_1 = require('./aug28/matanuska-1.jpg');
  const matanuska_2 = require('./aug28/matanuska-2.jpg');
  const matanuska_3 = require('./aug28/matanuska-3.jpg');
  const matanuska_4 = require('./aug28/matanuska-4.jpg');
  const matanuska_5 = require('./aug28/matanuska-5.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="A view of the matanuska glacier."
          src={matanuska_1} />
        <img
          alt="Eric and I in front of the glacier."
          src={matanuska_2} />
        <img
          alt="Me squatting by ice."
          src={matanuska_3} />
        <img
          alt="Pam, Eric, and I in front of the glacier."
          src={matanuska_4} />
        <img
          alt="A crack in the ice."
          src={matanuska_5} />
    </Carousel>
  )
}

export default MatanuskaCarousel
