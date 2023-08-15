const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target 
        const action = key.dataset.action

        if(!action){
            console.log('number key!')
        }

        if(
            action ==='add' ||
            action ==='substract' ||
            action ==='multiply' ||
            action ==='divide'
        ){
            console.log('opertaotr key!')
        }

        if(action ==='decimal'){
            console.log('decimal key!')
        }

        if(action ==='clear'){
            console.log('clear key!')
        }

        if(action ==='calculate'){
            console.log('equal key!')
        }
    }
})

