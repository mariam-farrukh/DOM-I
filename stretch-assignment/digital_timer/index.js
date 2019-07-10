// [ ] * Counts up to 10 seconds
// [ ] * Increments every 10 ms
// [ ] * Has digits change to red when it gets to 10 seconds
// [ ] * Should not count past 10 seconds

const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
let msTensBegin = 0;
let msHundredsBegin = 0;
let secondBegin = 0;
let tenBegin = 0;

function timer () {
  
  function start () {
    let ms = 0;
    
    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        stop(timerInterval); 
      }
      changeDigits(ms);
    }, 10);
  }

  function changeDigits (ms) {
    if (ms === 10000) {
        secondTens.textContent = "1";
        secondOnes.textContent = "0";
        msHundreds.textContent = "0";
        msTens.textContent = "0";
    } else if (ms % 1000 === 0) {
        secondBegin += 1;
        secondOnes.textContent = secondBegin.toString();
        msHundreds.textContent = "0";
        msTens.textContent = "0";
        msHundredsBegin = 0;
        msTensBegin = 0;
    } else if (ms % 100 === 0) {
        msHundredsBegin += 1;
        msHundreds.textContent = msHundredsBegin.toString();
        msTens.textContent = "0";
        msTensBegin = 0
    } else {
        msTensBegin += 1;
        msTens.textContent = msTensBegin.toString();
    }
  }

  function stop (interval) {
    clearInterval(interval);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }
  start();
}
timer();
