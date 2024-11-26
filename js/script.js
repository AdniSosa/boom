const userInput = document.getElementById('userInput');
const countdownDiv = document.getElementById('countdown');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart');
let body = document.body;


let randomNumber;
let seconds = 6;

const startGame = () => {
    const countNumber = document.createElement('p');
    countdownDiv.appendChild(countNumber);
    let counter = seconds;
    const countDownSet = setInterval(() => {
        counter--
        countNumber.innerHTML = `Cuenta atrás: <span>${counter}</span> segundos`;
        if(counter === 0) {
            userNumber();
            clearInterval(countDownSet)
        }
    }, 1000)
}

userInput.addEventListener('blur', () => {
    if(userInput.value.length != 0) {
        startGame();
    }
});
  

userInput.addEventListener('keypress', (event) => {
    //console.log(event);
    if(event.key === 'Enter' && userInput.value.length != 0) {
        startGame();
    }
});
  

const userNumber = () => {
    const inputValue = parseInt(userInput.value);
   // console.log(inputValue)
    const answer = document.createElement('p');
    const compare = document.createElement('p');
    resultDiv.appendChild(answer);
    resultDiv.appendChild(compare);
    if(inputValue > 3 || inputValue <= 0) {
        answer.textContent = 'Debes elegir un número entre 1 y 3.'
        
    } else if(inputValue == randomNumber) {
        answer.textContent = '¡Enhorabuena, has salvado el mundo! 👑';
        compare.textContent = `Tu número elegido ${inputValue} es el mismo que el número aleatorio ${randomNumber}`;
        answer.classList.add('green');
    } else {
        answer.textContent = 'La bomba ha estallado 💣';
        answer.classList.add('red');
        compare.textContent = `Tu número elegido ${inputValue} no es el mismo que el número aleatorio ${randomNumber}`;
    }
}

const restartGame = () => {
        resultDiv.textContent = '';
        countdownDiv.textContent = '';
        userInput.value = '';
        randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log(randomNumber); 
}


restartButton.addEventListener('click', restartGame)
window.addEventListener('load', restartGame);