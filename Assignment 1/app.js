
// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = prompt("Enter num1")
let num2 = prompt("Enter num2")
if (num1>num2) {
    console.log(`Larger number is ${num1}`)
} else {
    console.log(`Larger number is ${num2}`)
}


// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num = prompt("Enter a number: ");
if (num > 0) {
  alert("The sign is +");
} else if (num < 0) {
  alert("The sign is -");
} else {
  alert("Neutral sign");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let nums = []
for (let i = 0; i < 5; i++) {
  let num = prompt(`Enter number ${i+1} :`);
  nums.push(num);
}
let max = Math.max(...nums);
console.log("The largest number is " + max);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

for (let i=0; i<=15 ; i++){
    if (i%2===0) {
        console.log(`${i} is even number`)
    } else {
        console.log(`${i} is odd number`)
    }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade. 

let numOfSubjects = prompt("Enter the no of subjects");
let marksOfSubjects = [];

for (let i = 0; i < numOfSubjects; i++) {
  subMarks = prompt(`Enter marks of subject (between 0 and 100)${i + 1}`);
  marksOfSubjects.push(subMarks);
}

let sum = 0;
marksOfSubjects.forEach(mark => sum += parseFloat(mark));

let average = sum / marksOfSubjects.length;
console.log(`The average marks  is ${average}`);

function determineGrade(num) {
  let grade;
  if (num >= 90 && num <= 100) {
    grade = "A";
  } else if (num >= 80 && num < 90) {
    grade = "B";
  } else if (num >= 70 && num < 80) {
    grade = "C";
  } else if (num >= 60 && num < 70) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`The grade is: ${grade}`);
}
determineGrade(average);

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (i; i <=100; i ++){
    if (i%3===0 && i%5!==0){
        console.log("Fizz")
    }
    else if(i%5===0 && i%3!==0){
        console.log("Buzz")
    }
    else if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
}

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row);
  }
  