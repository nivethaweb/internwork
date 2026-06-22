
let n1=10;
let n2=20;
let n3=30;
let n4=40;
let n5=50;
let average=(n1+n2+n3+n4+n5)/5;
console.log("average=",average);

let redius=5;
let area=Math.PI*redius*redius;
let permiter=2*Math.PI*redius;
console.log("Area=",area);
console.log("permiter=",permiter);


let totelMinutes=130;
let hours=Math.floor(totelMinutes/60);
let minutes=totelMinutes % 60;
console.log("Hours=",hours);
console.log("Minutes=",minutes);

let s1=80;
let s2=70;
let s3=91;
let s4=78;
let s5=65;
let total= s1+s2+s3+s4+s5;
let percentage=(total/500)*100;
console.log("Total marks=",total);
console.log("Percentage=",percentage +"%");

let num=-5;
if(num>0){
    console.log("Possitive");
}
 else if(num<0){
    console.log("Negative");

}
else if(num==0){
    console.log("Zero");
}

let years=5;
let days=365* years;
console.log("Age in days=",days);


let num1=5;
let square=num1*num1;
let cube=num1*num1*num1;
console.log("Square=",square);
console.log("Cube=",cube);

let units=120;
let rate=5;
let bill= units*rate;
console.log("Electricity Bill= ₹" + bill);

//rupes into dollar
let rupees=8300;
let dollarRate=83;
let dollars=rupees/dollarRate;
console.log("Doller=$"+dollars);

//largest among three numbers using comparison operators
let a=10;
let b=25;
let c=15;
if(a>b && a>c){
    console.log("Largest number is",a);
}
else if(b>a && b>c){
    console.log("Largest number is",b);
}
else{
    console.log("Largest number is",c);
}



