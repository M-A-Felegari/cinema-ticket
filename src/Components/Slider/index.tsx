import React from 'react';
import "index.css";
import sahneZaniPoster from "../../Assets/images/sahne-zani-poster.jpg";
import sahneZaniPoster2 from "../../Assets/images/sahne-zani-poster2.jpg";

interface SliderImageInfo {
    src: string
    alt: string
}

interface SliderProps {
    images: SliderImageInfo[],
}

function Slider({images}: SliderProps) {
    return (
        <Carousel className="slider">
            {images.map(image => (
                <img src={image.src} alt={image.alt} className="image"/>
            ))}
        </Carousel>
    );
}

export default Slider;