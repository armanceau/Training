console.log('connecté'); 

const questions = document.querySelectorAll('.question'); 
console.log(questions); 

// Cette écriture renvoie une erreur
// tableau.addEventListener
// questions.addEventListener('click', function(){
//     console.log('tableau cliqué'); 
// }); 

// J'accède à un élément précis du tableau questions en écrivant
// tableau[index]; 
const deux = questions[2]; 
console.log(deux); 

deux.addEventListener('click', function(){
    // console.log('question 3 cliquée'); 
}); 

questions.forEach(item => {
    console.log('item'); 
    // Chaque élément du tableau est représenté par item
    // Maintenant chaque élément du tableau (item) est soumis à une action au clic
    item.addEventListener('click', function(){
        console.log('item cliqué'); 
        // je sélectionne et stocke la DIV suivante de l'item cliqué
        const next = item.nextElementSibling;
        console.log(next); 
        // On rend visible ou invisible la réponse
        next.classList.toggle('visible'); 

        // Je cible et stocke l'icône de item
        icone = item.lastElementChild; 
        console.log(icone); 
        icone.classList.toggle('fa-chevron-up'); 
        

    });
}); 






