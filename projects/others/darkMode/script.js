const switchBox = document.querySelector('.switch');
console.log(switchBox);

const btn = document.querySelector('.btn');
console.log(btn);

const icon = document.querySelector('i');
console.log(icon);

const container = document.querySelector('.container');
console.log(container);

const titre = document.querySelector('h1');
console.log(titre);

switchBox.addEventListener('click', function(){
    console.log('div cliquée!');
    //btn.style.left = "60px";
    btn.classList.toggle('btn-change');

    icon.classList.toggle('icone-change');

    icon.classList.toggle('fa-sun');

    switchBox.classList.toggle('switch-change');

    container.classList.toggle('container-change');

    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE";
    }
    else{
        titre.innerText = "DARK MODE";
    }
});

