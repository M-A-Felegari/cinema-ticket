import React from 'react';
import {useParams} from "react-router-dom";

function MovieScreen() {
    let {name } = useParams();
    return (
        <div>Movie {name}</div>
    );
}

export default MovieScreen;