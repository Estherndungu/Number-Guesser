/*
GAME FUNCTIONS:
 1. Player must guess a number between 1 and 10
 2. Player gets a certain amount of guesses
 3. Notify player of guesses remaining
 4. Notify the player of the correct answer if loose
 5. let player choose to play again
 */

 let min = 1,
     max =10,
     winningNum = 2,
     guessesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

//play again
//event listener

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Enter a number between ${min} and ${max}`, 'red');
  }
  if(guess === winningNum){
    //winning
    //siable input
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
     setMessage(`YOU WIN! ${winningNum} is correct.`, 'green' );
     

  }else{
    //Wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0){
      //game over
      guessInput.disabled = true;
    guessInput.style.borderColor = 'red';
    setMessage(`GAME OVER! You lost. The correct number was ${winningNum}.`, 'red' );
    }else{
      //more choices left
      guessInput.style.borderColor = 'red';
      //clear input
      guessInput.value = '';
      setMessage(`${guess} is not correct! ${guessesLeft} guesses Left.`)
    }
  }
})



function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}