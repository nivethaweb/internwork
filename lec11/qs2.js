//Declare two variables and print their sum
let a=10;
let b=20;
let sum=a+b;
console.log("sum=",sum);

//Find the difference of two numbers.

let x=20;
let y=10;
let difference=a-b;
console.log("Difference=",difference);

// Find the product of two numbers.
let p=10;
let q=5;
let product=a*b;
console.log("Product=",product);

//Find the quotient of two numbers
let num1=20;
let num2=5;
let quotient=num1/num2;
console.log("Quotient=",quotient);

//Find the remainder when one number is divided by another
let a1=20;
let a2=3;
let remainder=a%b;
console.log("Remainder=",remainder);

//Swap two numbers using a third variable.
let b1=10;
let b2=20;
let temp;
console.log("Before swap:");
console.log("b1=",b1);
console.log("b2=",b2);
temp=b1;
b1=b2;
b2=temp;
console.log("After swap:");
console.log("b1=",b1);
console.log("b2=",b2);

//Swap two numbers without using a third variable
let a21=10;
let b21=20;
console.log("before swap:");
console.log("a21=",a21);
console.log("b21=",b21);
a21=a21+b21;
b21=a21-b21;
a21=a21-b21;
console.log("After swap:");
console.log("a21=",a21);
console.log("b21=",b21);

//Find the square of a number
let value=6;
let result=value*value;
console.log("Square=",result);

//Find the cube of a number.
let data = 4;
let output = data * data * data;
console.log("Cube =", output);

//Calculate the area of a rectangle
let length = 8;
let width = 5;
let area = length * width;
console.log("Area of rectangle =", area);

// Calculate the perimeter of a rectangle.

let length = 8;
let width = 5;
let perimeter = 2 * (length + width);
console.log("Perimeter of rectangle =", perimeter);

//Calculate the area of a circle.
let radius = 7;
let area = 3.14 * radius * radius;
console.log("Area of circle =", area);

// Calculate the circumference of a circle.
let radius = 7;
let circumference = 2 * 3.14 * radius;
console.log("Circumference of circle =", circumference);

// Convert kilometers into meters.
let kilometer = 5;
let meter = kilometer * 1000;
console.log("Meters =", meter);

//Convert meters into centimeters.
let meter = 8;
let centimeter = meter * 100;
console.log("Centimeters =", centimeter);

//Convert Celsius into Fahrenheit.

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit =", fahrenheit);

//Convert Fahrenheit into Celsius.

let fahrenheit = 86;
let celsius = (fahrenheit - 32) * 5/9;
console.log("Celsius =", celsius);

//Convert minutes into hours and minutes.

let totalMinutes = 130;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
console.log("Hours =", hours);
console.log("Minutes =", minutes);

//Convert seconds into hours, minutes, and seconds.

let totalSeconds = 3670;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log("Hours =", hours);
console.log("Minutes =", minutes);
console.log("Seconds =", seconds);

//Convert days into years, months, and days.

let totalDays = 800;
let yearCount = Math.floor(totalDays / 365);
let remainingDays1 = totalDays % 365;
let monthCount = Math.floor(remainingDays1 / 30);
let dayCount = remainingDays1 % 30;
console.log("Years =", yearCount);
console.log("Months =", monthCount);
console.log("Days =", dayCount);

//Calculate simple interest.
let principalAmount = 1000;
let rateOfInterest = 5;
let timeYears = 2;
let simpleInterest = (principalAmount * rateOfInterest * timeYears) / 100;
console.log("Simple Interest =", simpleInterest);

//Calculate compound interest.

let principalValue = 1000;
let annualRate = 0.05;
let timesCompounded = 1;
let years = 2;
let amount = principalValue * Math.pow((1 + annualRate / timesCompounded), (timesCompounded * years));
let compoundInterest = amount - principalValue;
console.log("Amount =", amount);
console.log("Compound Interest =", compoundInterest);

//Calculate the average of five numbers.

let numOne = 10;
let numTwo = 20;
let numThree = 30;
let numFour = 40;
let numFive = 50;
let totalSum = numOne + numTwo + numThree + numFour + numFive;
let averageValue = totalSum / 5;
console.log("Average =", averageValue);

//Calculate the percentage of five subjects.
let subjectA = 80;
let subjectB = 75;
let subjectC = 90;
let subjectD = 85;
let subjectE = 70;
let totalMarks = subjectA + subjectB + subjectC + subjectD + subjectE;
let percentageValue = (totalMarks / 500) * 100;
console.log("Total Marks =", totalMarks);
console.log("Percentage =", percentageValue + "%");

//Calculate BMI using weight and height.
let weightKg = 60;
let heightMeters = 1.6;
let bmiValue = weightKg / (heightMeters * heightMeters);
console.log("BMI =", bmiValue);

//Find whether a number is even or odd.

let inputNumber = 17;
if (inputNumber % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

//Find whether a number is positive, negative, or zero.
let checkNumber = -8;
if (checkNumber > 0) {
    console.log("Positive number");
} else if (checkNumber < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

//Check whether a number is divisible by 5.

let testNumber = 25;
if (testNumber % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

//Check whether a number is divisible by both 5 and 11.

let testValue = 55;
if (testValue % 5 === 0 && testValue % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not divisible by both 5 and 11");
}

//Find the largest among two numbers.

let firstValue = 15;
let secondValue = 25;
if (firstValue > secondValue) {
    console.log("Largest number is", firstValue);
} else {
    console.log("Largest number is", secondValue);
}