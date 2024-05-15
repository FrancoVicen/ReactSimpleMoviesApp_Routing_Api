import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { MovieDetails } from '../pages/MovieDetails';

export function MyRoutes(){
    return(
    <Router>
        <Routes>
            <Route exact path='/' 
            element={<LandingPage/>}
            />
            <Route exact path="movies/:movieId" 
            element={<MovieDetails/>}
            />
        </Routes>
    </Router>
    )
}
