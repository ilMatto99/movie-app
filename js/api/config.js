// import del package che mi rende disponibili le variabili d'ambiente

//import dotenv from "dotenv";
//carica le variabili d'ambiente del file .env
//dotenv.config();

export const BASE_URL = "https://api.themoviedb.org/3/";

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDMzMjM5MTFlNDNmMTZhODBlOGY4ZjJlOGUwMTY1ZiIsInN1YiI6IjY1ZTg0YzI2M2ZlMTYwMDE3YjVkN2Y5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s-8ck3PUXG5BIVd_ZwlC0zH72wP6LK65MX1apv3OjJA",
        //Per funzionare lato server: Authorization: `Bearer ${process.env.API_KEY}`

    },
    
};


