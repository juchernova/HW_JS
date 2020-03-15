// function getRandomFloat(min, max) {
//   return Math.floor(Math.ranomd() * (1000000 - 100000) + 100000);
// }

console.log(Math.floor(Math.random() * (1000000 - 100000) + 100000));




let number = (Math.floor(Math.random() * (1000000 - 100000) + 100000));

number = number + '';

console.log(number);
let korzina = 0; 
let korzinaTwo = 0;
for (let i = 0; i < number.length; i++) {
    console.log(`before`, korzina)
    korzina = korzina + +number[i];
    console.log('afteer', korzina);
    korzinaTwo = korzinaTwo * +number[i];
    console.log('afteerTwo', korzinaTwo);
}
