// function dogToHumanAge(dogAge) {
//     var humanAge = (dogAge - 2) * 4 + 21;

//     console.log("Dog age is: " + dogAge);
//     console.log("Human age is: " + humanAge);
// }

// dogToHumanAge(7);

// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2)
//     var interpretation = ""
//     if (bmi < 18.5) {
//         interpretation = `Your BMI is ${bmi}, so you are underweight.`
//     } if (bmi >= 18.5 && bmi <= 24.9) {
//         interpretation = `Your BMI is ${bmi}, so you have normal weight.`
//     } if (bmi >24.9) {
//         interpretation = `Your BMI is ${bmi}, so you are overweight.`
//     }

//     return interpretation
// }

// console.log(bmiCalculator(60, 2));

//  var output = [];

//  function fizzBuzz() {
//      for (let i = 1; i <= 100; i++) {
//          if (i % 3 === 0) {
//              if (i % 5 === 0) {
//                  output.push("FizzBuzz");
//              } else {
//                  output.push("Fizz");
//              }
//          } else if (i % 5 === 0) {
//              output.push("Buzz");
//          } else {
//              output.push(i);
//          }
//      }
//      console.log(output);
//  }

//  fizzBuzz();

// var output = [];

//  function fizzBuzz() {
//      var i = 1;
//      while (i <= 100) {
//         if (i % 3 === 0) {
//             if (i % 5 === 0) {
//                 output.push("FizzBuzz");
//             } else {
//                 output.push("Fizz");
//             }
//         } else if (i % 5 === 0) {
//             output.push("Buzz");
//         } else {
//             output.push(i);
//         }
//         i++;
//      }
//      console.log(output);
//  }

//  fizzBuzz();


//  function sing99BottlesBeet() {
//      var i = 99;
//      while (i > 1) {
//          console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
//          i--;
//      }
//      if (i === 1) {
//         console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
//         i--;
//     } if (i === 0) {
//         console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
//     }
//  }

//  sing99BottlesBeet();

output = []
 function fibonacciGenerator(n) {
     for (var i = 0; i <= n; i++) {
         if (i === 0) {
             output.push(0);
         } else if (i === 1) {
             output.push(1);
         } else {
             var newElement = output[i-2] + output[i-1];
             output.push(newElement);
         }
     }
     return output;
 }

 console.log(fibonacciGenerator(10));