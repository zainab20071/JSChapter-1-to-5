
 let num11= parseInt ("3");
 let num12= parseInt("5"); 

 let num19=num11 + num12;

alert (num19);

// 2.Repeat the task1 for Subtraction,Multiplication,Division and Modulus.

        //    Answer
  
        // For Subtraction

 let num35= parseInt ("3");
 let num36= parseInt ("5");
 
 let Sums= num35 -num36;

 alert(Sums);
 
    //   For Multiplication

  let num5= parseInt ("3");
  let num6= parseInt ("5");
  
  let Sum= num5 * num6;

  alert(Sum);
 
    // For   Division

let num7= parseInt ("3");
let num8= parseInt ("5");

let sum= num7 / num8;

alert(sum);

    //    For Modulus

    let num9= 3%5;
    alert(num9);
  
// 3


// A. Declare a variable:

let num;

// B. Show the value of variable in browser (value is undefined)

document.write("Value after number declaration is"+num+"<br>");

// C. Initialize the variable with 5

num=5;

// D. Show the initial value in browser 

document.write("initial value:"+num+"<br>");

// E.Increment the variable

num++;

// F. Show the value after increament in browser

document.write("Value after increment:"+num+"<br>");

// G.Add 7 to the variable

num+=7;

// H. Show the value after addition in browser 

document.write("Value after addition:"+num+"<br>");

// I.Decreament the variable

num--;

// J. Show the value after decrement in browser

document.write("Value after decreament:"+num+"<br>");

// K. Show the remainder after dividing the variable's value by 3

let remainder=num%3;

// L. Output the remainder

document.write("Remainder:"+remainder+"<br>");

// 4.
let ticketPrice = 600; 
    let totalTickets = 5;
    let totalCost = ticketPrice * totalTickets;
    
    document.getElementById("output").innerHTML = 
      `Cost of one movie ticket: ${ticketPrice} PKR<br>` + 
      `Total cost to buy ${totalTickets}  tickets to a movie: ${totalCost} PKR`;

// 5.

for (let i = 1; i <= 10; i++) {
    document.getElementById("output-1").innerHTML += 
      `4 x ${i} = ${4 * i}<br>`;
  }


//   6.
// A. Store a Celsius temperature into a variable
let celsius = 20;
    
// B. Convert Celsius to Fahrenheit and output
let fahrenheit = (celsius * 9/5) + 32;
document.getElementById("output").innerHTML += 
  `${celsius} Celsius is ${fahrenheit} Fahrenheit<br>`;

// D. Store a Fahrenheit temperature into a variable
let fahrenheit2 = 70;

// E. Convert Fahrenheit to Celsius and output
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.getElementById("output").innerHTML += 
  `${fahrenheit2} Fahrenheit is ${celsius2.toFixed(2)} Celsius`;






