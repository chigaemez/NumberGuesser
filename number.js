let max = 10,
    min = 1,
    winningNum = GetRandomNum(min, max),
    guessesLeft = 3;



const game = document.querySelector('#game');
const maxNum = document.querySelector('.max-num')
const minNum = document.querySelector('.min-num')
const guessInput = document.querySelector('#guess-input')
const guessbtn = document.querySelector('#guess-btn')
const message = document.querySelector('.message')

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
      window.location.reload()
  }
})


guessbtn.addEventListener('click', function(e){
  let guess = parseFloat(guessInput.value)

  if(isNaN(guess) || guess < 1 || guess > 10 ){
    setMessage(`Please input a number from ${min} to ${max}`, 'red')
  }


  else{
    if(guess === winningNum){
      guessInput.style.borderColor = 'green';
      guessInput.disabled = true;
      gameOver(true, `${winningNum} is correct, YOU WIN!!!`)

    }

    else{
      guessesLeft -= 1
      if(guessesLeft === 0){
        gameOver(false, ` GAME OVER, YOU LOST. ${winningNum} is the correct number`)
        guessInput.value=""
        guessInput.disabled = true

      }
      else{
        guessInput.value = ''
        guessInput.style.borderColor = 'red'
        setMessage(`${guess} is not correct, ${guessesLeft}, guesses left`, 'red')
      }
    }
  }
})



function gameOver(won, msg){
  won === true ? color = 'green' : color = 'red'

  message.textContent = msg
  message.style.color = color

  guessbtn.value = 'Play again'
  guessbtn.className = 'play-again';
}


function GetRandomNum(min, max){
  return Math.floor(Math.random()*(max-min)+1)+  min
}




function setMessage(msg, color){
  message.textContent = msg
  message.style.color = color

}
