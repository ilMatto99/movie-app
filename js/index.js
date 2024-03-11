import { getTrending, getTrendingMovies, getSerchPerson } from "./api/trendingGetter.js";
 
export const trendingData = getTrending().then(data => {
    data.results.forEach(movie => {
        console.log("ID: " + movie.id);
        console.log("Poster_path: " + movie.poster_path);
        console.log("Title: " + movie.title);
        console.log("Vote_average: " + movie.vote_average);
        console.log("Media_type: " + movie.media_type );
        console.log("Release_date: " + movie.release_date + "\n");
    });
}); 

getTrending();
getTrendingMovies();
getSerchPerson();


