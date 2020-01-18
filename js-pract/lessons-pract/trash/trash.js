let array = [
 {
     "name" : "Ivan1",
     "surname" : "Ivanov1",
     "year" : 1991,
     "family" : [
         "Mum3", "Father1", "Sister1"
     ]
 },
 {
    "name" : "Ivan2",
     "surname" : "Ivanov2",
     "year" : 1991,
     "family" : [
         "Mum2", "Father2", "Sister2"
     ]
 },
 {
    "name" : "Ivan3",
     "surname" : "Ivanov3",
     "year" : 1991,
     "family" : [
         "Mum3", "Father3", "Sister3"
     ]
 }
]
//task: print all objects in order

console.log(array[0]["surname1"]);

let car = {
    "model": "Dodge",
    "year": 1967,
    "color": "red",
    "body": "sedan"
}
//keys  keys + value
for(let j in car) {
    console.log(j + " " + car[j]);
}
//print all
for(let i = 0; i < array.length; i++) {
    console.log(`======  Object N ${i+1}  =======`)
    for(let j in array[i]) {
        if(j === "family") {
            for(let k =0; k< array[i][j].length; k++) {
                console.log("Member " + (k+1) + ": " + array[i][j][k]);
            }
        } else  {
            console.log("Other "+ array[i][j]);
        }
    }
}

let arr2 = [5,6,7];

//forOf - values
for(let i in arr2) { //index
    console.log(i)
}
for(let item of arr2) { //values
    console.log(item)
}

let arrP = document.getElementsByTagName("p");
let tagid = document.getElementById("p");
let tagClass = document.querySelector(".class");


for(let item of arrP) { 
    console.log(item)
}
console.log(tagid);
console.log(tagClass);
