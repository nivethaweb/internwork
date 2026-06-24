//reverse a number
let num=1234;
let rev=0;
while(num>0){
    let digit=num%10;
    rev=rev*10+digit;
    num = Math.floor(num / 10);  
}
console.log("Reversed number:", rev);

//sum of digits
let num1=1234;
let sum=0;
while(num1>0){
    let dig=num1%10;
    sum=sum+dig;
    num1=Math.floor(num1/10);
}
console.log("Sum of digits:",sum);

//a number is a palindrome
let n=121;
let original =n;
let reverse=0;
while(n>0){
    let ls=n%10;
    reverse=reverse*10+ls;
    n=Math.floor(n/10);
}
if(original==reverse){
    console.log(original + "is a palindrome") 
}else{
    console.log(original + "is not a palindrome") 
}

//Armstrong number
let num2=153;
let org=num2;
let sum1=0;
while(num2>0){
    let lsdi=num%10;
    sum1=sum+(lsdi**3);
    num2=Math.floor(num2/10);

}
if(sum1==org){
    console.log(org + "is an Armstrong number")
}else{
    console.log(org + "is not  an Armstrong number")
}

//Fibonacci series
let tot=7;
let firstValue=0;
let secondValue=1;
console.log("Fibonacci series");
for(let count =1;count<=tot;count++){
    console.log(firstValue);
    let nextvalue=firstValue+secondValue;
    firstValue=secondValue;
    secondValue=nextvalue;

}

//GCD of two numbers
let first=12;
let sec=18;
let gcd=1;
for(let  a=1; a<=first && a<=sec;a++){
    if(first%a==0 && sec%a==0){
        gcd=a;
    }
}
console.log("GCD is", gcd);

//all prime numbers
for(let x=2;x<=100;x++){
    let isPrime=true;
    for(let y=2;y<x;y++){
        if(x%y==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(x);
    }
}