import "./MovieCard.css";
import {Link} from "react-router-dom";

export function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <li className="movieCard">
            <Link to= {"/movies/"+movie.id}>
                <img className="moviePoster"
                width={230} height={345} 
                src={imageUrl} 
                alt={movie.title} />
            </Link>
            <div className="moviesTitles">{movie.title}</div>
        </li>
    );
};
export default MovieCard