/* 
a. Write a JavaScript program to find the diagonal of a square where the length of each
side is 9.
b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.
c. Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.

/* a) */

function getSide() {
  let x = document.getElementById("imputX").value;
  let y = x * Math.sqrt(2);

  document.getElementById("resultOne").innerHTML = `Diagonal of a square where the length of each sire is ${x} is: ${y}`;
  console.log(`Diagonal of a square where the length of each sire is ${x} is: ${y}`);
} 

/* b) */

function getSides() {
  let a = document.getElementById("imputA").value;
  let b = document.getElementById("imputB").value;
  let c = document.getElementById("imputC").value;

  let area = 1/4 * Math.sqrt(4 * (Math.pow(a, 2) * Math.pow(b, 2)) - Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2)) 
  document.getElementById("resultTwo").innerHTML = `The Area is: ${area}`;
  console.log(`The Area is: ${area}`)
}

/* c) */

function circleFunction() {
  let radius = document.getElementById("radius").value;
  let circumference = 2 * Math.PI * radius;
  let surface = Math.PI * Math.pow(radius, 2);
 
  document.getElementById("resultThree").innerHTML = `Circumference is: ${circumference}`;
  document.getElementById("resultFour").innerHTML = `Surface area of the circle is: ${surface}`;
  console.log(`Circumference is: ${circumference}`);
  console.log(`Surface area of the circle is: ${surface}`)
}


