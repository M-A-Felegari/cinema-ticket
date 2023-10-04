import React from 'react';
import "./MovieCard.css"
import {BsStarFill} from "react-icons/bs";

interface MovieCardProps {
    imageSrc: string
    imageAlt:string
    title: string
    year: number
    genre: string
    star: number
    description: string
    price: number
}

function MovieCard({imageSrc,imageAlt, title, year, genre, star, description, price}: MovieCardProps) {
    return (
        <div className='movieCard'>
            <div className="posterContainer">
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className="informationContainer">
                <div className="top">
                    <div className="information">
                        <p className="title">{title}</p>
                        <p className="extraInfo">{year}-{genre}</p>
                    </div>
                    <div className="star"><span>{star}</span> <BsStarFill color="var(--c-secondary)"/></div>
                </div>
                <div className="description">{description}</div>
                <div className="price">{price}$</div>
            </div>
        </div>
    );
}

export default MovieCard;