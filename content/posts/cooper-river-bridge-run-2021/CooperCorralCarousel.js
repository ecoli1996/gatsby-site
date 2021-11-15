import React from "react"
import Carousel from 'nuka-carousel/index'
import Video1 from "./corral.mp4"
import Captions1 from "file-loader!./corral.vtt"
import Video2 from "./corral2.mp4"
import Captions2 from "file-loader!./corral2.vtt"
import Video3 from "./corral3.mp4"
import Captions3 from "file-loader!./corral3.vtt"

function CooperCorralCarousel() {
    const styles = {
        height: "569px",
        width: "320px",
        marginRight: "auto",
        marginLeft: "auto"
    };
  return (
    <Carousel
      enableKeyboardControls={true}
      dragging={true}
      swiping={true}
      style={styles}>
        <video controls>
            <source src={Video1} type="video/mp4" />
            <track kind="captions" srcLang="en" src={Captions1} />
        </video>
        <video controls>
            <source src={Video2} type="video/mp4" />
            <track kind="captions" srcLang="en" src={Captions2} />
        </video>
        <video controls>
            <source src={Video3} type="video/mp4" />
            <track kind="captions" srcLang="en" src={Captions3} />
        </video>
    </Carousel>
  )
}

export default CooperCorralCarousel
