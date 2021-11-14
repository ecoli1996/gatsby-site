import React from "react"
import Carousel from 'nuka-carousel/index'
import aug28_1 from './aug28/aug28-1.jpg'
import aug28_2 from './aug28/aug28-2.jpg'
import aug28_3 from './aug28/aug28-3.jpg'

function Aug28Carousel() {
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}>
        <img
          alt="The Matanuska Glacier."
          src={aug28_1} />
        <img
          alt="Eklutna spirit houses."
          src={aug28_2} />
        <img
          alt="A mountain and a river."
          src={aug28_3} />
    </Carousel>
  )
}

export default Aug28Carousel
