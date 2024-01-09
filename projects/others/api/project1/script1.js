function displayAllBook(){

    var request = new XMLHttpRequest();

    request.open('GET', 'https://127.0.0.1:8001/api/livres', true);

    request.onload = function() {

        var data = JSON.parse(request.responseText);

        //Récupérer la div dans l'HTML où l'on va afficher le contenu de l'advice
        var displayBookDiv = document.getElementById('display-book');

    // Utiliser forEach pour itérer sur chaque livre et créer une carte pour chaque livre
        data['hydra:member'].forEach(function (livre) {
            // Créer un élément de carte pour chaque livre
            var livreCard = document.createElement('div');
            livreCard.classList.add('livre-card');

            // Ajouter le contenu du livre à la carte
            livreCard.innerHTML = `
                <h3>${livre.nom}</h3>
                <p>Auteur: ${livre.auteur}</p>
                <p>Année de publication: ${livre.date}</p>
                <!-- Ajoutez d'autres détails du livre selon votre structure de données -->
            `;



        // Ajouter la carte à la div d'affichage des livres
        displayBookDiv.appendChild(livreCard);

    });
    }
    request.send();

    document.addEventListener('DOMContentLoaded', function() {
        displayAllBook();
    });

}


// window.location.href = "https://www.example.com/nouvelle-page";