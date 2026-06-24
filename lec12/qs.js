//cheak whether a number is possitive,neg,zero
let num=0;
if(num>0){
    console.log("Passitive")
}else if(num <0){
    console.log("Negative")
}else if(num == 0){
    console.log("zero")
}
//number even or odd
let a=5;
if(a%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}
//eligible vote
let age=12;
if(age>=18){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible to vote")
}
//largest among two number
let x=10;
let y=20;
if(x>y){
    console.log(x +" is largest")
} else{
    console.log(y +" is largest")
}

//largest three number
let n1=10;
let n2=30;
let n3=5;
if(n1>n2){
    console.log( n1 + " is largest number")
}
else if(n2>n3){
    console.log( n2 + " is largest number")
}
else if(n3>n1){
    console.log( n3 + " is largest number")
}
//leap year
let year=2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log( year +" is leap year")
}else{
    console.log( year +" is Not leap year")
}
//divisible by 5 and 11
let num1=55;
if(num1 %5==0 && num1 %11==0){
    console.log(num1 + " is divisible by both 5 and 11");
}else{
    console.log(num1 + " is  not divisible by both 5 and 11");
}
//greats based on mark
let mark=100;
if(mark>=90){
    console.log("Grate A")
}else if(mark>=80){
    console.log("Grate B")
}else if(mark>=70){
    console.log("Grate C")
}else if(mark>=50){
    console.log("Grate D")
}else{
    console.log("Fail")
}

//vovel or consonant
let ch='a';
if(ch=='a'|| ch=='e'|| ch=='i' || ch=='o' || ch=='u'){
    console.log(ch + " is a Vowel")
}else{
    console.log(ch + " is  not a Vowel")
}