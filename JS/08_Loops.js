// General Loops: for, while, do-while

// For Loop

for(let i=0; i<10;i++){
    console.log(i);
}

// While Loop

let j = 0;
while (j < 10) {
    console.log(j + 1);
    j += 1;
}

// Do While Loop

let k = 0;
do {
    if(k===5){
        k +=1;
        break;
    }
  console.log(k + 1);
  k +=1;
} while (k < 10);

let arr = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

arr.forEach(function(element){
    console.log(element);
});

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}
    