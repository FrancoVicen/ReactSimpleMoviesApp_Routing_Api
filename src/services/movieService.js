const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1NjJjN2RkNGFhM2NjNGE2N2MwZTI3NzM0YjE4OSIsInN1YiI6IjY2NDM3YWUxNjUxODVkNzE1NGNiNWYyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NYuQN5WmO-QAa0f5jYho5cBMRLO5vHF0v7zvgnYRgqE'
    }
};
const API = 'https://api.themoviedb.org/3';
export function get(path) {
    return fetch(API+path, options)
    .then((result) => result.json());
}