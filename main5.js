let numRandom = (Math.floor(Math.random() * 101));
console.log(numRandom);

for ( let i = 0; i < 11; i++) { 
  let whatNumber = prompt('Угадай число?', '');
  if (whatNumber < numRandom) {
    alert('твое число меньше');
  }
    else if (whatNumber > numRandom){
    alert('твое число больше');
  } else {
    alert('YEEEES');
  }
  if (i == 10) {
    alert(numRandom);
  }
}