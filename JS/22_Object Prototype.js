// Object literal : Object.prototype
let obj = {
    name: "Riya",
    message: "hello guys",
    address: "Mathura"
}
console.log(obj);
function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Rohan Das");
console.log(obj2);
 