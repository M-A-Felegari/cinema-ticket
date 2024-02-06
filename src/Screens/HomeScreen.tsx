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
import {MovieCardSkeleton} from "../Components/Skeleton";
import {Variants, motion} from "framer-motion";

type Movie = {
    id: number
    imageSrc: string
    imageAlt: string,
    title: string,
    year: number,
    genre: string,
    star: number,
    description: string
    price: number
} //TODO: split it into the Models folder

const MotionSwiper = motion(Swiper);

function HomeScreen() {

    const enum Tab {
        TodayShows,
        Tomarrow,
        ThisWeek
    }

    const getShows = (tab: Tab): Movie[] | null => {
        switch (tab) {
            case Tab.TodayShows:
                return [
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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

            case Tab.Tomarrow:
                return [
                    {
                        id: 3,
                        imageSrc: sahneZaniMiniPoster,
                        imageAlt: 'sahne zanu',
                        title: 'Sahne Zani',
                        year: 2023,
                        genre: 'history',
                        star: 4,
                        description: 'The Sahne zan is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
                        price: 3.25
                    },
                    {
                        id: 2,
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
                        id: 1,
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

            case Tab.ThisWeek:
                return [
                    {
                        id: 30,
                        imageSrc: sahneZaniMiniPoster,
                        imageAlt: 'sahne zanu',
                        title: 'Sahne Zani',
                        year: 2023,
                        genre: 'history',
                        star: 4,
                        description: 'The Sahne zan is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
                        price: 3.25
                    },
                    {
                        id: 29,
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
                        id: 28,
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
                        id: 4,
                        imageSrc: sahneZaniMiniPoster,
                        imageAlt: 'sahne zanu',
                        title: 'Sahne Zani',
                        year: 2023,
                        genre: 'history',
                        star: 4,
                        description: 'The Sahne zan is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
                        price: 3.25
                    },
                    {
                        id: 5,
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
                        id: 6,
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
                        id: 7,
                        imageSrc: sahneZaniMiniPoster,
                        imageAlt: 'sahne zanu',
                        title: 'Sahne Zani',
                        year: 2023,
                        genre: 'history',
                        star: 4,
                        description: 'The Sahne zan is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.',
                        price: 3.25
                    },
                    {
                        id: 8,
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
                        id: 9,
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
        }
    }

    const [activeTab, setActiveTab] = useState(Tab.TodayShows)
    const [movieCards, setMovieCards] = useState(() => getShows(activeTab))

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

    const tabs = [
        {
            id: Tab.TodayShows,
            title: "Today shows"
        },
        {
            id: Tab.Tomarrow,
            title: "Tomarrow"
        },
        {
            id: Tab.ThisWeek,
            title: "this week"
        }
    ]
    const selectTab = (tab: Tab): void => {
        setMovieCards(null);
        setActiveTab(tab)
        setTimeout(() => {
            setMovieCards(getShows(tab))
        }, 1000)
    }


    return (
        <motion.main
            className="HomeScreen"
            // initial={{ x:'-100%'}}
            // animate={{ x:0}}
            // // exit={{x:'100%',transition:{duration:.02}}}
            // transition={{ duration: .5}}
        >
            <div className="container">
                {/*<HomeHeader/>*/}
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
                <MotionSwiper
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

                    variants={{
                        loading: {},
                        loaded: {
                            transition: {
                                delayChildren: 0.04,
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    animate={"loaded"}
                    initial="loading"
                >
                    {newReleases.map(newRelease => (
                        <SwiperSlide key={newRelease.id}>
                            <motion.img
                                src={newRelease.src}
                                alt="newRelease"
                                className='movieCard'
                                variants={{
                                    loading: {
                                        scale: 0.9,
                                        opacity: 0
                                    },
                                    loaded: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.4
                                        }
                                    }
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </MotionSwiper>
            </section>
            <section className="shows">
                <div className="tabs">
                    <div className="tabsContainer">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`tab ${activeTab === tab.id ? "active" : null}`}
                                onClick={() => selectTab(tab.id)}
                            >
                                {tab.title}
                                {/*TODO: when i contact to api i should put onclick method seprate and call contact with api in it*/}
                            </button>
                        ))}
                    </div>
                </div>
                <motion.div
                    className="movieCards"
                    key={activeTab}
                    variants={{
                        loading: {},
                        loaded: {
                            transition: {
                                delayChildren: 0.04,
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    animate={movieCards ? "loaded" : "loading"}
                    initial="loading"
                >
                    {movieCards ? movieCards.map(movie => (
                        <MovieCard
                            id={movie.id}
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
                    )) : (
                        <>
                            {[0, 1, 2].map(i => (
                                <MovieCardSkeleton key={i}/>
                            ))}
                        </>
                    )}
                </motion.div>
            </section>
        </motion.main>
    );
}

export default HomeScreen;