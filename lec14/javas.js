function message(){
    console.log("hello !");

}
function showMessage(callback){
     setTimeout(callback,2000);
}
showMessage(message);

//car
class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }

}
const car1=new car("toyoto","Innova");
console.log(car1.brand);
console.log(car1.model);

//vehicle

class vehicle{
    constructor(brand){
        this.brand=brand;
    }
    start(){
        console.log(this.brand +"vehicle is starting")
    }
}
class bike extends vehicle{
    constructor(brand,model){
        super(brand)
        this.brand=model;

    }
    showinfo(){
        console.log("bike brand:"+this.brand)
        console.log("bike model:" +this.model)
    }
}
const bike1= new bike("yamaha","R15")
bike1.start();
bike1.showinfo();


