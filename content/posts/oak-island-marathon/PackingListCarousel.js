import React from "react"
import Carousel from 'nuka-carousel/index'
import myList from './elaina-packing.jpg'
import ericList from './eric-packing.jpg'

function PackingListCarousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="My marathon packing list. It's just a basic list with checkboxes."
          src={myList}/>
        <img
          alt="Eric's marathon packing list. His is a drawing of himself with all the clothes labeled. Much more artsy and cooler than mine!"
          src={ericList}
        />
    </Carousel>
  )
}

export default PackingListCarousel
