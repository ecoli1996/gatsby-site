import React from "react"
import Carousel from 'nuka-carousel/index'
import matanuska_1 from './aug28/matanuska-1.jpg'
import matanuska_2 from './aug28/matanuska-2.jpg'
import matanuska_3 from './aug28/matanuska-3.jpg'
import matanuska_4 from './aug28/matanuska-4.jpg'
import matanuska_5 from './aug28/matanuska-5.jpg'

function MatanuskaCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
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
