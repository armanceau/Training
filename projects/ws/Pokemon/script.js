var request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/pokemon', true);

request.onload = function (){
    var data = JSON.parse(request.responseText);
    console.log(data);
    
    var element = document.getElementsByClassName('.pokemon-image');
    

}

request.send();