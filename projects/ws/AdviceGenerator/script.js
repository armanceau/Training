function getAdvice(){
    var request = new XMLHttpRequest();

    request.open('GET','https://api.adviceslip.com/advice', true);
    
    request.onload = function() {
        var data = JSON.parse(request.responseText);   
    
        //Récupérer la div dans l'HTML où l'on va afficher l'id de l'advice
        var idElement = document.getElementById('id-element');
    
        //Injection de l'id de l'advice dans la div
        idElement.textContent = data.slip.id;
    
        //Récupérer la div dans l'HTML où l'on va afficher le contenu de l'advice
        var apiDataElement = document.getElementById('data-element');
    
        //Injection du contenu de l'advice dans la div
        apiDataElement.textContent = data.slip.advice;
    }
    request.send();
    
}

document.addEventListener('DOMContentLoaded', function() {
    getAdvice();
});

var reloadButton = document.getElementById('reload-button');
reloadButton.addEventListener('click', getAdvice);

