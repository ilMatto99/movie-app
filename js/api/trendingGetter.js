import { OPTS, BASE_URL } from "./config.js";

// const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
const url = "https://api.themoviedb.org/3/trending/day?language=en-US";


export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day?language=en-US", OPTS);
    const data = await response.json();

    return data;

}

export const getTrendingMovies = async () => {
    const response = await fetch(BASE_URL + "trendig/movie/day?language=en-US", OPTS);
    const data = await response.json();

    return data;
}

export const getSerchPerson = async () => {
    const response = await fetch(BASE_URL + "search/person" + "?query=clooney", OPTS);
    const data = await response.json();

    return data;
}


/** getTrendingMovies
 * 
 * @param BASE_URL
 * 
 * @returns film di tendenza
 */