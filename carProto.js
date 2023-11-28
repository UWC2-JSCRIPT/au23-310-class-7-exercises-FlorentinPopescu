class Car {
    /*
      * Car class
      * @constructor
      * @param {String} model
    */

    constructor (make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this.maxSpeed = maxSpeed;
        
        this.speed = 0;
        this.accCount = 0;
        this.decCount = 0;
    }

    accelerate(initialSpeed, accNo, accStep) {
        this.accCount += accNo;
        this.speed = initialSpeed;
        this.speed += accNo * accStep;
        
        if (this.speed <= this.maxSpeed) {
            console.log(`starting at ${initialSpeed} m/h accelerated ${this.accCount} times ` + 
                        `in increments of ${accStep} to speed up to ${this.speed} m/h`);
            return this.speed;
        } else if (this.speed > this.maxSpeed) {
            this.accCount = accNo;
            console.log(`cannot longer accelerate ${this.accCount} times in steps of ${accStep} from ${initialSpeed} m/h, ` + 
                        `maximal speed of ${this.maxSpeed} m/h reached`);
            return this.maxSpeed;
        }
    };

    brake(initialSpeed, decNo, decStep) {
        this.decCount += decNo;
        this.speed = initialSpeed;
        this.speed -= decNo * decStep;
        if (this.speed > 0) {
            console.log(`starting at ${initialSpeed} m/h decelerated ${this.decCount} times ` + 
                         `in decrements of ${decStep} to ${this.speed} m/h`);
            return this.speed;
        } else {
            this.speed = 0;
            console.log("decelerated to full stop");
            return this.speed;
        } 
    };

    toString() {
        return `${this.make} ${this.model} with a maximal speed of ${this.maxSpeed}`;
    };
}

/* ------------------------------------------- */
// Regular car - Create an instance, accelerate twice, brake once, and console log the instance.toString()
let corolla = new Car('Toyota', 'Corolla', 240);

let heading = document.createElement('h3');
heading.innerHTML  = "Regular Car - Create an instance, accelerate twice, brake once, and console log the instance.toString()";
heading.style = "fontWeight:bold";
document.body.appendChild(heading);

let htmlDiv = document.createElement('div');

let objectDescription = document.createElement("p");
objectDescription.innerHTML = corolla.toString();

let carDescription = document.createElement("p");
carDescription.innerHTML = JSON.stringify(corolla, null, 4);

let carAcellerateA = document.createElement("p");
carAcellerateA.innerHTML = corolla.accelerate(0, 2, 10);

let carAcellerateB = document.createElement("p");
carAcellerateB.innerHTML = corolla.accelerate(230, 2, 10);

let carBrakeA = document.createElement("p");
carBrakeA.innerHTML = corolla.brake(230, 1, 10);

let carBrakeB = document.createElement("p");
carBrakeB.innerHTML = corolla.brake(5, 1, 10);

/* ------------------------------------------- */
document.body.appendChild(htmlDiv).appendChild(objectDescription);
document.body.appendChild(htmlDiv).appendChild(carDescription);
document.body.appendChild(htmlDiv).appendChild(carAcellerateA);
document.body.appendChild(htmlDiv).appendChild(carAcellerateB);
document.body.appendChild(htmlDiv).appendChild(carBrakeA);
document.body.appendChild(htmlDiv).appendChild(carBrakeB);


/*--------------------------------------------------*/
class ElectricCar extends Car {
    /*
      * ElectricCar class
      * @constructor
      * @param {String} model
    */
    
    constructor(model, maxSpeed) {
        super("Toyota", model, maxSpeed);
        this.motor = "Electric";
    };

    toString() {
        return `This Electric ${super.toString()}`;
    };
}

/* ------------------------------------------- */
//  Electric car - Create an instance, accelerate twice, brake once, and console log the instance.toString()
let corollaX = new ElectricCar('Corolla', 240);

let headingX = document.createElement('h3');
headingX.innerHTML  = "Create an instance, accelerate twice, brake once, and console log the instance.toString()";
headingX.style = "fontWeight:bold";
document.body.appendChild(headingX);

let htmlDivX = document.createElement('div');

let objectDescriptionX = document.createElement("p");
objectDescriptionX.innerHTML = corollaX.toString();

let carDescriptionX = document.createElement("p");
carDescriptionX.innerHTML = JSON.stringify(corollaX, null, 4);

let carAcellerateAX = document.createElement("p");
carAcellerateAX.innerHTML = corollaX.accelerate(0, 2, 10);

let carAcellerateBX = document.createElement("p");
carAcellerateBX.innerHTML = corollaX.accelerate(230, 2, 10);

let carBrakeAX = document.createElement("p");
carBrakeAX.innerHTML = corollaX.brake(230, 1, 10);

let carBrakeBX = document.createElement("p");
carBrakeBX.innerHTML = corollaX.brake(5, 1, 10);

/* ------------------------------------------- */
document.body.appendChild(htmlDivX).appendChild(objectDescriptionX);
document.body.appendChild(htmlDivX).appendChild(carDescriptionX);
document.body.appendChild(htmlDivX).appendChild(carAcellerateAX);
document.body.appendChild(htmlDivX).appendChild(carAcellerateBX);
document.body.appendChild(htmlDivX).appendChild(carBrakeAX);
document.body.appendChild(htmlDivX).appendChild(carBrakeBX);
