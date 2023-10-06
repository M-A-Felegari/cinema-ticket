import React, {useState} from 'react';
import "./MovieCard.css"
import {BsStarFill} from "react-icons/bs";
import {Variants,motion} from "framer-motion";

interface MovieCardProps {
    id:number
    imageSrc: string
    imageAlt:string
    title: string
    year: number
    genre: string
    star: number
    description: string
    price: number
}

function MovieCard({id,imageSrc,imageAlt, title, year, genre, star, description, price}: MovieCardProps) {
    return (
        <motion.div
            className='movieCard'
            variants={{
                closed: {
                    scale:0.9,
                    opacity:0
                },
                open:{
                    scale:1,
                    opacity:1,
                    transition:{
                        duration:0.4
                    }
                }
            }}
        >
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
        </motion.div>
    );
}

export default MovieCard;