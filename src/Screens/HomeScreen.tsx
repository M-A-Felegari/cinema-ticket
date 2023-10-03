import React from 'react';
import HomeHeader from "../Components/header";
import sahneZaniPoster from "../Assets/images/sahne-zani-poster.jpg";
import sahneZaniPoster2 from "../Assets/images/sahne-zani-poster2.jpg";
import sahneZaniMiniPoster from "../Assets/images/sahne-zani-mini-poster.jpg";
import jokerBanner from "../Assets/images/Joker-banner.jpg";
import jokerMiniPoster from "../Assets/images/JokerMiniPoster.webp"
import suspectXMiniPoster from "../Assets/images/suspect-x-mini-poster.jpg"
import './styles/HomeScreen.css'
//start swiper imports
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Autoplay, Pagination} from 'swiper/modules';
//end swiper imports
import CarouselSlide from "../Components/Carousel/CarouselSlide";
import {RiFireFill} from "react-icons/ri";

function HomeScreen() {

    const slides = [
        {
            src: jokerBanner,
            alt: "1",
            price: 10.75
        }, {
            src: sahneZaniPoster2,
            alt: "2",
            price: 7
        }, {
            src: sahneZaniPoster,
            alt: "1",
            price: 10
        }]
    const newReleases = [
        {
            id: 1,
            src: sahneZaniMiniPoster,
        },
        {
            id: 2,
            src: jokerMiniPoster,
        },
        {
            id: 3,
            src: suspectXMiniPoster,
        },
        {
            id: 4,
            src: jokerMiniPoster,
        },
        {
            id: 5,
            src: suspectXMiniPoster,
        }]

    return (
        <main className="HomeScreen">
            <div className="container">
                <HomeHeader/>
                <section className="carouselContainer">
                    <Swiper className="carousel" pagination={true} navigation={true} autoplay={true}
                            modules={[Navigation, Autoplay, Pagination]} centeredSlides={true} spaceBetween={5}
                            loop={true}
                    >
                        {slides.map(slide => (
                            <SwiperSlide>
                                <CarouselSlide imageSource={slide.src} imageAlt={slide.alt} price={slide.price}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
            <section className="sliderContainer">
                    <p>
                        <RiFireFill style={{color: 'var(--c-secondary)'}}/> New Released
                    </p>
                        <Swiper
                            className="slider"
                            slidesPerView={3}
                            spaceBetween={15}
                        >
                            {newReleases.map(newRelease => (
                                <SwiperSlide key={newRelease.id}>
                                    <img src={newRelease.src} alt="newRelease"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </section>
        </main>
    );
}

export default HomeScreen;