import React from 'react';
import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import {TicketsScreen, HomeScreen, MovieScreen, ProfileScreen} from "./Screens";
import App from "./App";

function AppRouter() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<App/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="/tickets" element={<TicketsScreen/>}/>
                <Route path="/profile" element={<ProfileScreen/>}/>
                <Route path="/movie/:name" element={<MovieScreen/>}/>
            </Route>
        </Routes>
    );
}

export default AppRouter;
