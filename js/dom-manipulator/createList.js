/**
createTrendingMoviesList(

)
la funzione prenderà in ingresso un array di movies per ogni movie aggiungerà al dom un nuovo nodo, che sarà il tag <li> contenente il titolo del movie.

@param Array dei film
@returns
*/

export const createTrendingMoviesList = (movies) => {
// recupero il nodo ul con id "trending-movies-list"
const list = document.getElementById("trending-movies-list");

//ciclo su ogni elemento swll'array che viene preso in ingresso come parametro.
movies.forEach((element, index) => {
    //creiamo un nuovo nodo che corrisponde a un tag <li>
    const listItem = document.createElement("li");
    //impostiamo il contenuto  del tag li appena creato, assegnando il valore del title dell'elemento corrente in questa iterazione dell'array 
    listItem.textContent = element.title;


    list.appendChild(listItem);

});
};

export const containerCard = (elements) => 
{
    const cards = document.getElementById("movies-card");
    elements.results.forEach((element) => 
    {
        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w342${element.poster_path}`;    
        image.alt= "poster";

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerHTML = element.overview;

        textContainer.appendChild(title);
        card.appendChild(image); // Aggiungi l'elemento immagine, non image.src
        textContainer.appendChild(description);
        card.appendChild(textContainer);
        card.classList.add("movieCards");
        cards.appendChild(card);
    });

}
