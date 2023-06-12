const btnSuccess = document.querySelector('.btn-succes');
console.log(btnSuccess);

const cookies = document.querySelector('.cookies');
console.log('.cookies');

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué!');
    cookies.style.opacity = "0";
});

