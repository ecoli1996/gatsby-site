import React from "react"
import Carousel from 'nuka-carousel/index'

function WDWCarouselScenery() {
  const castle = require('./castle.png');
  const goofy = require('./goofy.png');
  const stitch = require('./stitch.png');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Cinderella's castle at night covered with light blue string lights"
          src={castle}/>
        <img
          alt="Me meeting Goofy in front of his yacht as he's dressed in a floral Hawaiian shirt and shorts"
          src={goofy} />
        <img
          alt="Me meeting Stitch who is wearing a pretty yellow and white lai."
          src={stitch}
        />
    </Carousel>
  )
}

export default WDWCarouselScenery
