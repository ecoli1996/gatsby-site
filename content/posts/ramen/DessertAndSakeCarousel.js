import React from "react"
import Carousel from 'nuka-carousel/index'
import mochi from './mochi.jpg'
import castella from './castella.jpg'
import sake from './nigori-sake.jpg'

function DessertAndSakeCarousel() {
  const props = {
    enableKeyboardControls: true,
    dragging: true,
    swiping: true,
    slidesToShow: 1
  }
  const styles = {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  };
  return (
    <Carousel {...props} style={styles}>
        <img
          alt="A box of green tea mochi"
          src={mochi}/>
        <img
          alt="The castella sponge cake"
          src={castella}
        />
        <img
          alt="The sake on a candlelit table"
          src={sake}
        />
    </Carousel>
  )
}

export default DessertAndSakeCarousel
