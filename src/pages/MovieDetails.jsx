import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {get} from '../services/movieService';
import {GetMovieImg} from '../utils/GetMovieImg';
import "./MovieDetails.css";

export function MovieDetails() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([])
    const [generes, setGeneres] = useState([])
    
    useEffect(() => {
        get("/movie/"+movieId).then((data) => {
            setMovie(data)
            setGeneres(data.genres)
            console.log(data.genres)
        })
    },[movieId])
    const imageUrl = GetMovieImg(movie.poster_path,500)
    return (
        <div className='detailsContainer'>
            <img className='col moviePoster' src={imageUrl} 
            alt={movie.title} 
            />
            <section className=' col movieDetails'>
                <p className='movieTitle'>
                    <strong>Title: </strong>
                    {/* <br /> */}
                    {movie.title}
                </p>
                <p>
                    <strong>Generes: </strong>
                    <br />
                    {generes.map((genero) => genero.name).join(", ")}
                </p>
                <p>
                    <strong>Description: </strong>
                    <br />
                    {movie.overview}
                </p>
            </section>
        </div>
    );
}