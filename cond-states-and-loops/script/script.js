/*
a) Write a JavaScript program that accepts two integers and displays the larger of the two.
b) Write a JavaScript program that checks whether an integer is an even or an odd number.
 */

function largerInteger() {
  let x = document.getElementById("numberOne").value;
  let y = document.getElementById("numberTwo").value;

  if(Number(x) > Number(y)) {
    document.getElementById("odd-even-same").innerHTML = `${x}  >  ${y}`;
    console.log(`X = ${x} > Y = ${y}`);
  } else if (Number(x) < Number(y)) {
    document.getElementById("odd-even-same").innerHTML = `${x}  <  ${y}`;
    console.log(`X = ${x} <  Y = ${y}`);
  } else {
    document.getElementById("odd-even-same").innerHTML = `${x}  =  ${y}`;
    console.log(`X = ${x} = Y = ${y}`);
  }
}



function evenOddNumber() {
  let integerNumber = document.getElementById("evenOddNumber").value;

  if (integerNumber % 2 == 0) {
    document.getElementById("even-or-odd").innerHTML = `${integerNumber} is EVEN`;
    console.log(`The numbner ${integerNumber}  EVEN`);
  } else {
    document.getElementById("even-or-odd").innerHTML = `${integerNumber} is ODD`;
    console.log(`The numbner ${integerNumber}  ODD`);
  }
}
