import React from 'react';
import HomeHeader from "../Components/header";
import sahneZaniPoster from "../Assets/images/sahne-zani-poster.jpg";
import sahneZaniPoster2 from "../Assets/images/sahne-zani-poster2.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
import {FaMoneyBill, FaTicketAlt} from "react-icons/fa";

function HomeScreen() {
    return (
        <div>
            <HomeHeader/>
            {/*<div style={{backgroundColor:'var(--c-primary-light)',marginTop:15}}>*/}
            {/*    <Carousel style={{height:"30vh"}} autoplay={true} autoplayInterval={5000}>*/}
            {/*        <img src={sahneZaniPoster} alt="1" style={{width:'100%',height:'30vh',translate:"translateY(50)",objectFit:'contain'}}/>*/}
            {/*        <img src={sahneZaniPoster2} alt="2" style={{width:'100%',height:'30vh',objectFit:'contain'}}/>*/}
            {/*        <img src={sahneZaniPoster} alt="3" style={{width:'100%',height:'30vh',objectFit:'contain'}}/>*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            <div style={{display:'flex',justifyContent:'center',marginTop:15}}>
                <Swiper pagination={true} navigation={true} autoplay={true} modules={[Navigation,Autoplay,Pagination]}
                        className="mySwiper" centeredSlides={true} spaceBetween={5} loop={true}
                        style={{width:'90%'}}
                >
                    <SwiperSlide style={{width:'100%',height:'25vh',justifyContent:'center',position:'relative'}}>
                        <span
                            style={{position:'absolute',left:0,bottom:0,backgroundColor:'transparent',
                                border:'1px solid var(--c-secondary)',boxSizing:'content-box',color:'var(--c-secondary)',padding:'5px 10px',fontSize:".7rem",textTransform:'uppercase',fontWeight:"900",
                                display:"flex",alignItems:'center',gap:7}}
                        ><FaMoneyBill/>10.75$</span>
                        <img src={sahneZaniPoster} alt="1" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        <span
                            style={{position:'absolute',right:0,bottom:0,backgroundColor:'var(--c-secondary)',
                                border:'1px solid var(--c-secondary)',color:"var(--c-primary)",padding:'5px 10px',fontSize:".7rem",textTransform:'uppercase',fontWeight:"900",
                                display:"flex",alignItems:'center',gap:7}}
                        ><FaTicketAlt/>Buy Ticket</span>
                    </SwiperSlide>
                    <SwiperSlide style={{width:'100%',height:'25vh',justifyContent:'center',position:'relative'}}>
                        <span
                            style={{position:'absolute',left:0,bottom:0,backgroundColor:'transparent',
                                border:'1px solid var(--c-secondary)',boxSizing:'content-box',color:'var(--c-secondary)',padding:'5px 10px',fontSize:".7rem",textTransform:'uppercase',fontWeight:"900",
                                display:"flex",alignItems:'center',gap:7}}
                        ><FaMoneyBill/>10.75$</span>
                        <img src={sahneZaniPoster2} alt="1" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        <span
                            style={{position:'absolute',right:0,bottom:0,backgroundColor:'var(--c-secondary)',
                                border:'1px solid var(--c-secondary)',color:"var(--c-primary)",padding:'5px 10px',fontSize:".7rem",textTransform:'uppercase',fontWeight:"900",
                                display:"flex",alignItems:'center',gap:7}}
                        ><FaTicketAlt/>Buy Ticket</span>
                    </SwiperSlide>
                    <SwiperSlide style={{width:'100%',height:'25vh',justifyContent:'center',position:'relative'}}>
                        <span
                            style={{position:'absolute',left:0,bottom:0,backgroundColor:'transparent',
                                border:'1px solid var(--c-secondary)',boxSizing:'content-box',color:'var(--c-secondary)',padding:'5px 10px',fontSize:".7rem",textTransform:'uppercase',fontWeight:"900",
                                display:"flex",alignItems:'center',gap:7}}
                        ><FaMoneyBill/>10.75$</span>
                        <img src={sahneZaniPoster} alt="1" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        <span
                            style={{position:'absolute',right:0,bottom:0,backgroundColor:'var(--c-secondary)',
                                border:'1px solid var(--c-secondary)',color:"var(--c-primary)",padding:'5px 10px',fontSize:".7rem",textTransform:'uppercase',fontWeight:"900",
                                display:"flex",alignItems:'center',gap:7}}
                        ><FaTicketAlt/>Buy Ticket</span>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default HomeScreen;