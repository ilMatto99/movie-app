//funzione che al caricamento della pagina verifichi che il tiolo sia corretto in caso lo corregge

export const fixTitle = () => {
   // tag h1 che contiene il titolo
    const title = document.getElementById('header');
    const titleContent = title.innerHTML;

    if (titleContent === "Movie App")
    return;
else {
    title.innerHTML = "Movie App";
}
};

//una funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un film
export const addParagraph = () => {
    const title = document.getElementById("header");
    const paragraph = document.createElement("p");

    paragraph.innerHTML = "Indiana Jones";

    title.appendChild(paragraph);

}