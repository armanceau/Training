const switchBox = document.querySelector('.switch');

const btn = document.querySelector('.btn');

const icon = document.querySelector('i');

const container = document.querySelector('.container-switch');

const titre = document.querySelector('.title');

switchBox.addEventListener('click', function(){
    console.log('div cliquée!');
    btn.classList.toggle('btn-change');

    icon.classList.toggle('icone-change');

    icon.classList.toggle('fa-sun');

    switchBox.classList.toggle('switch-change');

    container.classList.toggle('container-switch-change');

    titre.classList.toggle('title-change');

    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE";
    }
    else{
        titre.innerText = "DARK MODE";
    }
});

