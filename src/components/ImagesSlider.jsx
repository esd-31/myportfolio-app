import React from "react";
import { useState } from "react";
import "../sass/about.scss";
import img7 from "../ojt/ojt_img_seven.jpg";
import img8 from "../ojt/ojt_img_eight.jpg";
import img9 from "../ojt/ojt_img_nine.jpg";


const slides = [
        {id:1, src: img7},
        {id:2, src: img8},
        {id:3, src: img9},
    ]

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <div className="slider-container">
            <div style={{backgoundImage: `url(${slides[currentIndex].src})`}}></div>
        </div>
    )
}

export default ImageSlider;