import React from "react";
import Carousel from 'nuka-carousel/index'
import Expo1Image from './expo1.jpg'
import Expo2Image from './expo2.jpg'
import Expo3Image from './expo3.jpg'

function CooperExpoCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="Bib pickup line."
          src={Expo1Image} />
        <img
          alt="Outside the beer garden tent."
          src={Expo2Image} />
        <img
          alt="Pasta dinner featuring pasta alfredo, ravioli, a lime seltzer, and a mini red velvet bundt cake."
          src={Expo3Image} />
    </Carousel>
  )
}

export default CooperExpoCarousel
