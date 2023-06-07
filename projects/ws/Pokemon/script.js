function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var nameApi;
var imagePokemon;
var request = new XMLHttpRequest();
var pokemonId = getRandomArbitrary(1, 250);
var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;

request.open('GET', url, true);

request.onload = function () {
    var data = JSON.parse(request.responseText);
    imagePokemon = document.getElementById('pokemon-image');
    imagePokemon.setAttribute('src', data.sprites.front_default);
    imagePokemon.setAttribute('alt', 'Pokemon Image');
    nameApi = data.name;

    console.log(nameApi);
};




var modal = document.getElementById('modal-1');
setTimeout(() => {
    modal.style.display = "block";
  }, "1000");


var inputGuess = document.getElementsByClassName('guess-value')[0];




function testSubmit() {
    var guessValue = inputGuess.value;
    
    if (guessValue === nameApi) {
        modal.style.display = "none"; // Utiliser "none" pour masquer le modal
        imagePokemon.style.filter="none";
    } else {
        imagePokemon.style.animation = 'shake 1s'; // Définit l'animation shake pour le mouvement
    
        function resetAnimation() {
            imagePokemon.style.animation = ''; // Réinitialise l'animation de l'imagePokemon
            imagePokemon.style.transform = 'translateX(0%)';
        }
    
        setTimeout(resetAnimation, 2000); // Réinitialise l'animation après 2 secondes
    }    
}

request.send();
