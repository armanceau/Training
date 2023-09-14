var request = new XMLHttpRequest();

request.open('GET', 'data.json', true);
var songsContainer = document.getElementById('songs-container');

request.onload = function(){
    var data = JSON.parse(request.responseText);
    
    // Sélectionnez un élément du DOM pour y ajouter les divs des chansons

 
    // Bouclez à travers chaque chanson dans les données

    for(var i = 0; i < data.songs.length; i++){
        var song = data.songs[i];
        console.log(song )
        
        
        var divSong = document.createElement('div')
  
        var pTitle = document.createElement('p')
        pTitle.textContent = song.title

        var pArtiste = document.createElement('p')
        pArtiste.textContent = song.artist

        var pGenre = document.createElement('p')
        pGenre.textContent = song.genre 
        

        divSong.appendChild(pTitle);
        divSong.appendChild(pArtiste);
        divSong.appendChild(pGenre);

        // Ajoutez la div de la chanson au conteneur principal
        songsContainer.appendChild(divSong);
    }
}

request.send();
    
function testConnect(){
    var inputConnect = document.getElementById('inputConnect').value
    if(inputConnect ===''){
        alert('Rentrez un identifiant')
        return false
    }
    else{
        localStorage.setItem('identifiant', inputConnect)
        document.location='home.html'
    }
}

console.log(localStorage.getItem('identifiant'))
var identifiant1 = localStorage.getItem('identifiant')
var identifiant = document.createElement('p')
console.log(identifiant1)

identifiant.textContent = 'Bonjour ' +identifiant1


songsContainer.appendChild(identifiant)

var element = document.getElementById('#test')
var canvas = document.createElement('canvas')
canvasWidth = element.clientWidth
canvasHeight = element.clientHeight

var ctx = canvas.getContext('2d')


