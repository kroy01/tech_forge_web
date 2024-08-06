import React from "react";
import "./imageBox.css";

function ImageBox(props) {
    return (
        <div className="imagebox-box imagebox-background" style={props.style}>
            <img src={props.image} className="imagebox-property" alt={props.alt}></img>
        </div>
    );
};
export default ImageBox;