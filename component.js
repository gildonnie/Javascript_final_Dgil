
const restartBtn = document.querySelector('#restart');
const boxes = document.querySelectorAll('.box');
const winner = document.querySelector('.winner')
const box1 = document.getElementById('0') 
const box2 = document.getElementById('1')
const box3 = document.getElementById('2')
const box4 = document.getElementById('3')
const box5 = document.getElementById('4')
const box6 = document.getElementById('5')
const box7 = document.getElementById('6')
const box8 = document.getElementById('7')
const box9 = document.getElementById('8')




let currentPlayer = 'X';
let clear = '';
let win = '';

 
function checkForWin(box1, box2, box3) {
  return box1.textContent && box1.textContent === box2.textContent && box1.textContent === box3.textContent;
}


boxes.forEach(individualBox => {
  individualBox.addEventListener('click', () => {
      if(!individualBox.textContent) {
        individualBox.innerHTML = currentPlayer;
        console.log(currentPlayer)
        if (
          checkForWin(box1, box2, box3) ||
          checkForWin(box4, box5, box6) ||
          checkForWin(box7, box8, box9) ||
          checkForWin(box1, box4, box7) ||
          checkForWin(box2, box5, box8) ||
          checkForWin(box3, box6, box9) ||
          checkForWin(box1, box5, box9) ||
          checkForWin(box3, box5, box7)
        ) {
            if(currentPlayer === 'X') {
              win = 'X';
            } else if (currentPlayer === 'O') {
              win = 'O';
            }
            winner.innerHTML = `Player ${win} wins!`;
            currentPlayer = '';
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
        }
      }
    })
  })
  
  restartBtn.addEventListener('click', () => {
    console.log('clicked')
    boxes.forEach((individualBox) => {
      individualBox.innerHTML = clear;
      winner.innerHTML = clear;
      currentPlayer = 'X';
    })
  })


