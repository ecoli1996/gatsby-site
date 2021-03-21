import React from "react"
import Carousel from 'nuka-carousel/index'

function DessertAndSakeCarousel() {
  const mochi = require('./mochi.jpg');
  const castella = require('./castella.jpg');
  const sake = require('./nigori-sake.jpg');
  const props = {
    slideHeight: "650px",
    slideWidth: "488px",
    initialSlideWidth: 488,
    initialSlideHeight: 650,
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
