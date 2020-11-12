import React from "react"
import Carousel from 'nuka-carousel/index'

function WinnerCreekCarousel() {
  const winner_creek_1 = require('./aug27/winner-creek-1.jpg');
  const winner_creek_2 = require('./aug27/winner-creek-2.jpg');
  const winner_creek_3 = require('./aug27/winner-creek-3.jpg');
  const winner_creek_4 = require('./aug27/winner-creek-4.jpg');
  return (
    <Carousel
      enableKeyboardControls="true"
      dragging="true"
      swiping="true">
        <img
          alt="Trees on the Winner Creek Trail with the sunlight peeking through."
          src={winner_creek_2} />
        <img
          alt="A creek running over some rocks."
          src={winner_creek_3} />
        <img
          alt="A dirt path on the Winner Creek Trail."
          src={winner_creek_4} />
        <img
          alt="Trees on the Winner Creek Trail with the sunlight peeking through."
          src={winner_creek_1} />
    </Carousel>
  )
}

export default WinnerCreekCarousel
