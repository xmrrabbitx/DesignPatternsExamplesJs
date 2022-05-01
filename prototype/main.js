function Carprototype(proto){

    this.proto = proto;


    this.clone = function(){

         let car = new Car();

         car.wheels = this.proto.wheels;
         car.doors = this.proto.doors;
         car.windows = this.proto.windows;


         return car;


    }


}


function Car(wheels,doors,windows){

        this.wheels = wheels;
        this.doors = doors;
        this.windows = windows;


        this.order = function(){

            console.log("your order is a car with " + this.wheels + " wheels");

        }

}



let car = new Car(4,2,2);

let carprototype = new Carprototype(car);

let cl1 = carprototype.clone();
console.log(cl1);
cl1.order();


let cl2 = carprototype.clone();
console.log(cl2);
cl2.order();
