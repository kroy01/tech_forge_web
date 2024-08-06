import React from "react";
import './FillerImage.css';

function FillerImage(props) {

    return <div style={props.style}>
    <h2 style={props.x}>{props.head}<sub>{props.hs}</sub></h2>
    <h3 style={{fontSize : "40px", margin : "0 auto"}}>{props.val}</h3>
    </div>
}

export default FillerImage;