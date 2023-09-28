import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HistoryScreen, HomeScreen, MovieScreen, ProfileScreen} from "./Screens";
import App from "./App";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/history" element={<HistoryScreen/>}/>
                    <Route path="/profile" element={<ProfileScreen/>}/>
                    <Route path="/movie/:name" element={<MovieScreen/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
