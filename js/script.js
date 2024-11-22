const userInput = document.getElementById('userInput');
const inputValue = userInput.value;
console.log(inputValue);
const countdownDiv = document.getElementById('countdown');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart');
let body = document.body;


const randomNumber = Math.floor(Math.random() * 3) + 1;
let seconds = 6;

const countdown = seconds => new Promise (resolve => setTimeout(resolve, seconds)); 

let counter = Promise.resolve();

body.addEventListener('click', (event) => {
    //console.log(event)
    if(event.target !== userInput && event.target !== restartButton) {
    const countNumber = document.createElement('p');
    countdownDiv.appendChild(countNumber);
      
    for(let count = 5; count >= 0; count--) {
        counter = counter.then (() => {
            //console.log(count);
            countNumber.textContent = count;
            return countdown(1000);
            
        })
        
    }
    }
});


userInput.addEventListener("submit", function(e){
    console.log(e);
    
    console.log(inputValue);

  });

const userNumber = (value) => {
    const answer = document.createElement('p');
    resultDiv.appendChild(answer);
    if(value > 3 && value <= 0) {
        answer.textContent = 'Debes elegir un número entre 1 y 3.'
    } else if(value === randomNumber) {
        answer.textContent = '¡Has salvado el mundo!';
    } else {
        answer.textContent = 'La bomba ha estallado';
    }
}

/* 2. Introduce un número del 1 al 3 en el campo de entrada.
3. El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.
4. Después de la cuenta atrás, el juego evaluará el número introducido.
5. Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado. 
6- clic en el botón "Reiniciar Juego". Esto comenzará una nueva cuenta atrás y permitirá que ingreses otro número.*/