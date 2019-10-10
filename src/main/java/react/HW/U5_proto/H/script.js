//new object car
let car = {
    model : "Type1",
    weight: "1000",
    color: "Red",
     go : function() {
        console.log(`go ${this.model}`);
    }
}
//new object ford
let ford = {
    year: "1969",
    go : function() {
        console.log(`Year = ${this.year} , color = ${this.color}`);
    }
}
//add parent
Object.setPrototypeOf(ford, car);

//check
console.log(ford);
console.log(ford.model);
console.log(ford.weight);
console.log(ford.color);
console.log(ford.go());

//add new property
car.mileage = "2000km";
console.log(ford.mileage);

//call the prototype method
ford.__proto__.go();


//new object chevrolet (parent ford)
let chevrolet = {
    body_style: "hatchback",
    drive_type: "speed car"
}
Object.setPrototypeOf(chevrolet, ford);
chevrolet.go();
console.log(chevrolet.model);
console.log(chevrolet.color);
console.log(chevrolet.mileage); 

//all properties into chevrolet
console.log("----------")
for(let p in chevrolet) {
    console.log(p + " : " + chevrolet[p]);
}

