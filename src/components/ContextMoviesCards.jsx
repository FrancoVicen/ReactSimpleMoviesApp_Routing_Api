import { useEffect, useState } from "react";
import { get } from "../services/movieService";
import { MovieCard } from "./MovieCard";
import "./ContextMoviesCards.css";

export function ContextMoviesCards() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
            console.log(data.results);
        });
    }, [])
    return (
        <ul className="container">
            {movies.map((movie) => (
                <MovieCard 
                key={movie.id}
                movie={movie}
                />
            ))}
        </ul>
    );
}