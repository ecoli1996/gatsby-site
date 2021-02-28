import React from "react"
import Video from "./finish.mp4"
import Captions from "file-loader!./finish.vtt"

export default function FinishVideo() {
    const styles = {
        paddingLeft: "25%",
        paddingRight: "25%",
        width: "100%"
    };

    return (
        <video controls style={styles}>
            <source src={Video} type="video/mp4" />
            <track kind="captions" srcLang="en" src={Captions} />
        </video>
    );
}