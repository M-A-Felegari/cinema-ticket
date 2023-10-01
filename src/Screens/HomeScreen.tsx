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
import CarouselSlide from "../Components/Carousel/CarouselSlide";

function HomeScreen() {
    return (
        <div>
            <HomeHeader/>
            <div style={{display:'flex',justifyContent:'center',marginTop:15}}>
                <Swiper pagination={true} navigation={true} autoplay={true} modules={[Navigation,Autoplay,Pagination]}
                        className="mySwiper" centeredSlides={true} spaceBetween={5} loop={true}
                        style={{width:'90%',height:'25vh'}}
                >
                    <SwiperSlide style={{width:'100%',height:'100%'}}>
                        <CarouselSlide imageSource={sahneZaniPoster} imageAlt="1" price={10.75}/>
                    </SwiperSlide>
                    <SwiperSlide style={{width:'100%',height:'100%'}}>
                        <CarouselSlide imageSource={sahneZaniPoster2} imageAlt="2" price={10.50}/>
                    </SwiperSlide>
                    <SwiperSlide style={{width:'100%',height:'100%'}}>
                        <CarouselSlide imageSource={sahneZaniPoster} imageAlt="3" price={7.25}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default HomeScreen;