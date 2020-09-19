const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates Riya object
let Riya = Object.create(proto);
Riya.name = "Riya";
Riya.role = "Programmer";
Riya.changeName("Riya2")
console.log(Riya)

// This also creates Riya object
const Riya1 = Object.create(proto, {
    name: { value: "Riya", writable: true },
    role: { value: "Programmer" },
});
Riya1.changeName("Riya2")
// console.log(Riya1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let RiyaObj = new Employee("Riya", 345099, 87);
console.log(RiyaObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);


