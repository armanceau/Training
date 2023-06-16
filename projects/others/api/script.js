function sendRequest(){
    var request = new XMLHttpRequest();

    var city = document.getElementById('input-search').value;

    request.open('GET', 'http://api.waqi.info/feed/:London/?token=:token', true);

    request.onload = function(){
        var data = JSON.parse(request.responseText);

        var test = document.getElementById('test');

        test.textContent = data.id;

        console.log(data);
    }

request.send();
}




