import placeholder from '../imgs/placeholder-popcorn.png';

export function GetMovieImg(path, width){
    return path?`https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}