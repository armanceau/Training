var request = new XMLHttpRequest();

request.open('GET', 'data.json', true);

request.onload = function(){
    var data = JSON.parse(request.responseText);
    
    // Sélectionnez un élément du DOM pour y ajouter les divs des chansons
    var songsContainer = document.getElementById('songs-container');

    // Bouclez à travers chaque chanson dans les données
    console.log(data.songs.length)
    for (var i = 0; i < data.songs.length; i++) {
        var song = data.songs[i];
        
        // Créez une div pour chaque chanson
        var songDiv = document.createElement('div');
        songDiv.className = 'song';

        // Créez des éléments pour chaque paramètre de la chanson
        var title = document.createElement('p');
        title.textContent = 'Title: ' + song.title;

        var artist = document.createElement('p');
        artist.textContent = 'Artist: ' + song.artist;

        var genre = document.createElement('p');
        genre.textContent = 'Genre: ' + song.genre;

        // Ajoutez les éléments au div de la chanson
        songDiv.appendChild(title);
        songDiv.appendChild(artist);
        songDiv.appendChild(genre);

        // Ajoutez la div de la chanson au conteneur principal
        songsContainer.appendChild(songDiv);
    }
}

request.send();


