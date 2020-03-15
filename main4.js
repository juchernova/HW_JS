
console.log(`${+numberOne} ${znak} ${+numberTwo}`);

let znak;
let numberOne;
let numberTwo;
while (znak !== '0') {
  numberOne = prompt('Введите первое число', '');

  znak = prompt('Введите знак операции', '');
  if (znak == '+' || znak == '-' || znak == '*' || znak == '/') { 
    numberTwo = prompt('Введите второе число', '');
    if (numberTwo !== '0'){

    } else {
      alert('Нельзя делить на ноль')
    }

    if (znak == '+') {
      alert(+numberOne + +numberTwo);
    }
    if (znak == '-') {
      alert(+numberOne - +numberTwo);
    }
    if (znak == '*') {
      alert(+numberOne * +numberTwo);
    }
    if (znak == '/') {
      alert(+numberOne / +numberTwo);
    }
 } else {
   znak = prompt('Введите знак операции', '');
 }
}