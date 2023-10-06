import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {HistoryScreen, HomeScreen, MovieScreen, ProfileScreen} from "./Screens";
import App from "./App";
import {AnimatePresence} from "framer-motion";

function AppRouter() {
    const location = useLocation();
    return (
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<App/>}>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="/history" element={<HistoryScreen/>}/>
                        <Route path="/profile" element={<ProfileScreen/>}/>
                        <Route path="/movie/:name" element={<MovieScreen/>}/>
                    </Route>
                </Routes>
            </AnimatePresence>
    );
}

export default AppRouter;
