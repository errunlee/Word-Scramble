let input = document.querySelector('#input')
let check = document.querySelector('#check')
let word = document.querySelector('#word')
let num = 0
let value = input.value;
//Array of Words
let myWords = ['javascript', 'python', 'java', 'rust', 'c++', 'django', 'angular', 'react']
myWords.sort(() => 0.5 - Math.random())

let first = myWords[num]

word.innerHTML = "Your word: " + first.split('').sort(() => 0.5 - Math.random()).join('')

function running() {
  btn_click();
  input.value = ''
}

check.addEventListener('click', running)
function btn_click() {
  if (num < myWords.length) {
    num++;
    if (input.value == first) {
      word.innerHTML = 'Correct Guess'
      input.classList.remove('redbdr')
      msg.innerHTML = ''
      countdown();
      setTimeout(() => {
        first = myWords[num]
        word.innerHTML = "Your word: " + first.split('').sort(() => 0.5 - Math.random()).join('')
        document.getElementById('input').value == ''
      }, 5000)
    }
    else {
      setTimeout(wrongInput, 500)
    }
  }
  else {
    document.write('Thanks for playing our game. New levels will be added soon.')
  }
}
function wrongInput() {
  msg.innerHTML = 'Wrong guess'
  msg.classList.add('msg')
  input.classList.add('redbdr')
}
function countdown() {
  let sec = 4
  check.removeEventListener('click', running)
  let ar = setInterval(() => {
    if (sec !== 0) {
      timer.innerHTML = `Next in ${sec}`;
      sec--;
    }
    else {
      timer.innerHTML = ''
      check.addEventListener('click', running)
      clearInterval(ar)
    }
  }, 1000)
}