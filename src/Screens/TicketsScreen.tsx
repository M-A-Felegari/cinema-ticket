import React from 'react';
import {motion} from "framer-motion";
import jokerMiniPoster from "../Assets/images/JokerMiniPoster.webp"
import suspectXMiniPoster from "../Assets/images/suspect-x-mini-poster.jpg"
import TicketCard from "../Components/Card/TicketCard";
import "./styles/TicketsScreen.css"

const tickets = [
    {
        id: 152727575,
        imageSrc: jokerMiniPoster,
        imageAlt: "joker",
        title: "joker",
        year: 2019,
        genre: "drama",
        star: 7.5,
        date: "23/7/1402",
        time: "17:30",
        price: 7.5,
        totalReservedTickets: 3,
        isUsedTicket:false
    },
    {
        id: 122724575,
        imageSrc: suspectXMiniPoster,
        imageAlt: "suspect x",
        title: "suspect x",
        year: 2023,
        genre: "action",
        star: 7,
        date: "24/7/1402",
        time: "15:00",
        price: 7,
        totalReservedTickets: 2,
        isUsedTicket: true
    },
]

function TicketsScreen() {
    return (
        <motion.main
            className="ticketsScreen"
        >
            <div className="ticketsContainer">
                {tickets.map(ticket => (
                    <TicketCard id={ticket.id} isUsedTicket={ticket.isUsedTicket} imageSrc={ticket.imageSrc}
                                imageAlt={ticket.imageAlt} title={ticket.title} year={ticket.year}
                                genre={ticket.genre} star={ticket.star} date={ticket.date}
                                time={ticket.time} price={ticket.price} totalReservedTickets={ticket.totalReservedTickets}
                    />
                ))}
            </div>
        </motion.main>
    );
}

export default TicketsScreen;