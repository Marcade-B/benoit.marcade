const formElement = document.querySelector("form");
const errorElement = document.querySelector(".error");
const animesElement = document.querySelector("#animes");
const showElement = document.querySelector(".showMoreButton");

const listMonth = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];


formElement.addEventListener("submit", async function (e) {
    e.preventDefault();
    
    animesElement.innerHTML = "";
    const search = formElement.search.value.trim();
    const checkboxElement = document.querySelector(".checkbox");

    if (search) {
        let response;

        if (!checkboxElement.checked) {
            response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
        } else {
            response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
        }
        
        const animes = await response.json();
        
        console.log(animes);
        
        for (const id in animes.data) {
            const titles = animes.data[id].title;
            const episodes = animes.data[id].episodes;
            const images = animes.data[id].images.jpg.image_url;
            const description = animes.data[id].synopsis;
            const link = animes.data[id].url;
            const genres = animes.data[id].genres;
            const dates = animes.data[id].aired.prop.from;
            const listDates = dates.day + " " + listMonth[dates.month - 1] + " " + dates.year;
            const listGenres = [];
            for (const genre in genres) {
                listGenres.push(" " + genres[genre].name);
            }

            errorElement.style.display = "none";
            animesElement.innerHTML += `<div class="result"><h1><a style="text-decoration: none" href="${link}">${titles}</a></h1><p>Nombres d'épisodes : ${episodes}</p><p>Genres :${listGenres}</p><p>Date de sortie : ${listDates}</p><a href="${link}"><img class="image" src="${images}"></img></a><p>${description}</p></div>`;
        }

    } else {
        errorElement.textContent = "Veuillez entrer un nom valide";
        errorElement.style.display = "block";
    }

    formElement.search.value = "";
    
})
