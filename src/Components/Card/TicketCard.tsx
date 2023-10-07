import React from 'react';
import './TicketCard.css'
import {BsFillCalendarDateFill, BsFillClockFill, BsStarFill} from "react-icons/bs";
import {motion} from "framer-motion";
import {IoMdDoneAll} from "react-icons/io";

interface TicketCardProps {
    id: number,
    isUsedTicket: boolean
    imageSrc: string
    imageAlt: string
    title: string
    year: number
    genre: string
    star: number
    date: string
    time: string
    price: number
    totalReservedTickets: number,
}

function TicketCard({
                        id,
                        isUsedTicket,
                        imageSrc,
                        imageAlt,
                        title,
                        year,
                        genre,
                        star,
                        date,
                        time,
                        price,
                        totalReservedTickets,
                    }: TicketCardProps) {
    return (
        <motion.div
            className="ticketCard"
            variants={{
                loading: {
                    scale:0.9,
                    opacity:0
                },
                loaded:{
                    scale:1,
                    opacity:1,
                    transition:{
                        duration:0.4
                    }
                }
            }}
        >
                {!isUsedTicket?(
                    <div className="top">
                        <p>Reserve ID:</p>
                        <p>{id}</p>
                    </div>
                ):(
                    <div className="top usedTicket">
                        already used
                        <IoMdDoneAll
                            style={{transform:'translate(.3rem, .1rem)'}}
                            fontSize='1.2rem'
                        />
                    </div>
                )}
            <div className="card">
                <div className="posterContainer">
                    <img src={imageSrc} alt={imageAlt}/>
                </div>
                <div className="information">
                    <div className="top">
                        <div className="left">
                            <p className="title">{title}</p>
                            <p className="extraInfo">{year}-{genre}</p>
                        </div>
                        <div className="star">
                            <span>{star}</span>
                            <BsStarFill
                                color="var(--c-secondary)"
                                style={{transform:'translateY(-.1rem)'}}
                            />
                        </div>
                    </div>
                    <div className="middle">
                        <p className="date"><BsFillCalendarDateFill style={{margin:'0 .3rem',transform: `translateY(.1rem)`}}/>{date}</p>
                        <p className="time"><BsFillClockFill style={{margin:'0 .3rem',transform: `translateY(.1rem)`}}/>{time}</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className='totalTickets'>{totalReservedTickets} {totalReservedTickets > 1 ? "tickets" : "ticket"}</p>
                <p className="totalPrice">total: {totalReservedTickets * price}$</p>
            </div>
        </motion.div>
    );
}

export default TicketCard;