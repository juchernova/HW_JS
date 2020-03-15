  let y;
  let x;



let xmin = 1;
let xmax = 5;
let step = 1;

for (let i = xmin; i < xmax; i+= step) {
//-0.23 * Math.pow(1, 2) + 1; === ?
//-0.23 * Math.pow(2, 2) + 2; === ?
  x = i;
  y = -0.23 * (x**2) + x;
  console.log(y);
}