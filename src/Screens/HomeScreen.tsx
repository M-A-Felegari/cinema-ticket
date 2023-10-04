import React, {useState} from 'react';
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
import MovieCard from "../Components/Card/MovieCard";

function HomeScreen() {

    const [activeTab, setActiveTab] = useState(0)

    const slides = [
        {
            src: jokerBanner,
            id: "1",
            price: 10.75
        }, {
            src: sahneZaniPoster2,
            id: "2",
            price: 7
        }, {
            src: sahneZaniPoster,
            id: "3",
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
    const movieCards = [
        {
            id:1,
            imageSrc: jokerMiniPoster,
            imageAlt: 'joker',
            title: 'Joker',
            year: 2019,
            genre: 'action',
            star: 8.5,
            description: 'The Joker is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
            price: 10.5
        },
        {
            id:2,
            imageSrc: suspectXMiniPoster,
            imageAlt: 'Suspect X',
            title: 'Suspect X',
            year: 2020,
            genre: 'horror',
            star: 7.4,
            description: 'hen a single mom’s abusive husband ends up dead, her next door neighbor unexpectedly offers to help cover up the crime. But his perfect plan is thwarted when an eager cop shows up determined to get to the truth. Soon, they develop a love triangle that threatens to unravel the lives of everyone involved. Directed and written by Sujoy Ghosh (Kahaani, Badla), the Bollywood noir thriller Suspect X (aka Jaane Jaan) stars Kareena Kapoor Khan, Jaideep Ahlawat, and Vijay Varma.',
            price: 8
        },
        {
            id:3,
            imageSrc: jokerMiniPoster,
            imageAlt: 'joker',
            title: 'Joker',
            year: 2019,
            genre: 'action',
            star: 8.5,
            description: 'The Joker is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
            price: 10.5
        }
    ]

    const tabs = [
        {
            id: 0,
            title: "Today shows"
        },
        {
            id: 1,
            title: "Tomarrow"
        },
        {
            id: 2,
            title: "this week"
        }
    ]
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
                            <SwiperSlide key={slide.id}>
                                <CarouselSlide imageSource={slide.src} imageAlt={slide.id} price={slide.price}/>
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
                    spaceBetween={20}
                    breakpoints={{
                        500: {
                            slidesPerView: 4
                        },
                        700: {
                            slidesPerView: 5
                        },
                        900: {
                            slidesPerView: 6
                        },
                        1100: {
                            slidesPerView: 7
                        }
                    }}
                >
                    {newReleases.map(newRelease => (
                        <SwiperSlide key={newRelease.id}>
                            <img src={newRelease.src} alt="newRelease"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="shows">
                <div className="tabs">
                    <div className="tabsContainer">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`tab ${activeTab === tab.id ? "active" : null}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                                {/*TODO: when i contact to api i should put onclick method seprate and call contact with api in it*/}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="movieCards">
                    {movieCards.map(movie=>(
                        <MovieCard
                            key={movie.id}
                            imageSrc={movie.imageSrc}
                            imageAlt={movie.imageAlt}
                            title={movie.title}
                            year={movie.year}
                            genre={movie.genre}
                            star={movie.star}
                            description={movie.description}
                            price={movie.price}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default HomeScreen;