var request = new XMLHttpRequest();

request.open('GET', '/projects/frontendMentor/rest-countries-api-with-color-theme-switcher-master/data.json', true);

request.onload = function() {
    var data = JSON.parse(request.responseText);

    function displayCountry(country) {
        const card = document.createElement("div");
        card.classList.add("card");

        const flag = document.createElement("img");
        flag.src = country.flags.png;
        flag.alt = country.name;
        flag.classList.add("flag");
        card.appendChild(flag);

        const name = document.createElement("h2");
        name.textContent = country.name;
        card.appendChild(name);

        const population = document.createElement("p");
        const populationText = document.createElement("span");
        populationText.textContent = "Population: ";
        populationText.classList.add("span-pop");
        population.appendChild(populationText);
        population.innerHTML += country.population.toLocaleString();
        population.classList.add("pop");
        card.appendChild(population);


        const region = document.createElement("p");
        region.textContent = "Region: " + country.region;
        card.appendChild(region);

        const capital = document.createElement("p");
        capital.textContent = "Capital: " + country.capital;
        card.appendChild(capital);

        // Ajouter la card à la page
        const container = document.getElementById("country-container");
        container.appendChild(card);
    }

    // Fonction pour filtrer les pays par région
    function filterByRegion() {
        const regionSelect = document.getElementById("region-select");
        const selectedRegion = regionSelect.value;
    
        if (selectedRegion === "") {
        displayCountries(countries); // Afficher tous les pays si aucune région n'est sélectionnée
        } else {
        const filteredCountries = countries.filter((country) => country.region === selectedRegion);
        displayCountries(filteredCountries);
        }
    }
  
    // Écouteur d'événement pour le changement de valeur dans le menu déroulant
    const regionSelect = document.getElementById("region-select");
    regionSelect.addEventListener("change", filterByRegion);
  

    // Fonction pour afficher les pays sur la page
    function displayCountries(countries) {
        const container = document.getElementById("country-container");
        container.innerHTML = ""; // Effacer le contenu précédent

        countries.forEach((country) => {
        displayCountry(country);
        });
    }

    // Fonction pour rechercher un pays par nom
    function searchCountry(event) {
        event.preventDefault(); // Empêche le rechargement de la page
    
        const searchInput = document.getElementById("search-input");
        const searchTerm = searchInput.value.toLowerCase();
    
        const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm)
        );
        displayCountries(filteredCountries);
    }
  
    // Écouteur d'événement pour la soumission du formulaire
    const form = document.getElementById("search-form");
    form.addEventListener("submit", searchCountry);
  

    // Charger les données depuis l'API
    let countries = [];

    fetch("/projects/frontendMentor/rest-countries-api-with-color-theme-switcher-master/data.json")
        .then((response) => response.json())
        .then((data) => {
        countries = data;

        // Afficher tous les pays par défaut
        displayCountries(countries);
        })
        .catch((error) => {
        console.log("Une erreur s'est produite lors du chargement des données :", error);
    });
};

request.send();
