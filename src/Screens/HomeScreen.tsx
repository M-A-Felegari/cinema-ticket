import React from 'react';
import HomeHeader from "../Components/header";
import sahneZaniPoster from "../Assets/images/sahne-zani-poster.jpg";
import sahneZaniPoster2 from "../Assets/images/sahne-zani-poster2.jpg";
import Carousel, {ScrollMode} from "nuka-carousel";

function HomeScreen() {
    return (
        <div>
            <HomeHeader/>
            <div style={{backgroundColor:'var(--c-primary-light)',marginTop:15}}>
                <Carousel style={{height:"30vh"}} autoplay={true} autoplayInterval={5000}>
                    <img src={sahneZaniPoster} alt="1" style={{width:'100%',height:'30vh',translate:"translateY(50)",objectFit:'contain'}}/>
                    <img src={sahneZaniPoster2} alt="2" style={{width:'100%',height:'30vh',objectFit:'contain'}}/>
                    <img src={sahneZaniPoster} alt="3" style={{width:'100%',height:'30vh',objectFit:'contain'}}/>
                </Carousel>
            </div>
        </div>
    );
}

export default HomeScreen;