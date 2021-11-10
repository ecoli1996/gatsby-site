import React from "react"
import Carousel from 'nuka-carousel/index'

function CooperExpoCarousel() {
  const expo1 = require('./expo1.jpg');
  const expo2 = require('./expo2.jpg');
  const expo3 = require('./expo3.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Bib pickup line."
          src={expo1} />
        <img
          alt="Outside the beer garden tent."
          src={expo2} />
        <img
          alt="Pasta dinner featuring pasta alfredo, ravioli, a lime seltzer, and a mini red velvet bundt cake."
          src={expo3} />
    </Carousel>
  )
}

export default CooperExpoCarousel
