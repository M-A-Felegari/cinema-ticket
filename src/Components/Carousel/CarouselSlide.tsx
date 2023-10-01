import {FaMoneyBill, FaTicketAlt} from "react-icons/fa";
import React from "react";

import "./CarousleSlide.css"

interface CarouselSlideProps {
    imageSource: string
    imageAlt: string
    price: number
}

function CarouselSlide({imageSource, imageAlt, price}: CarouselSlideProps) {
    return (
        <>
           <span className="carouselBadge carouselPriceBadge">
                <FaMoneyBill/>{price}$
           </span>
            <img src={imageSource} alt={imageAlt}/>
            <button className="carouselBadge carouselBuyTicketButton">
                <FaTicketAlt/>Buy Ticket
            </button>
        </>
    );
}

export default CarouselSlide;