//array
let array = ["Dino1", "Dino2", "Dino2"];
let array2 = ["Dino1", ["Trex", "Trex2", "Trex3"], "Dino2"];

array[3] = "Dino4";

// console.log(array[1]);
// console.log(array2[1][0]);

array2.push("Diiiino");

let newArray = array.concat(array2);
// console.log(newArray);

let newArray1 = array.concat(array2, array2);
// console.log(newArray1);

let ind = array.indexOf("Dino1");
// console.log(ind);/

newArray = array2.join(" ");
// console.log(newArray);

//objects
let murka = {
    legs : 3,
    name: "Tosha",
    color: "Black"
}
console.log(murka["name"]);
console.log(murka.name);
murka["age"] = 5;
console.log(murka.age);
console.log(Object.keys(murka));
let arrObj = [
    {
        legs : 3,
        name: "Tosha",
        color: "Black"
    },
    {
        legs : 3,
        name: "Tosha",
        color: "Black"
    }
];
console.log(arrObj);


