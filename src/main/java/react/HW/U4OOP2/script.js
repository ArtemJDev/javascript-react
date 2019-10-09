class Man {
    constructor(name, age, sex) {
        this._name = name;
        this.age = age;
        this.sex = sex;
    }
    render(x) {
        let out = `Name: ${this.name}, Age: ${this.age}, Sex: ${this.sex}`;
        document.querySelector(x).innerHTML = out;
    }
}
const man = new Man("John", 25, "M");
console.log(man);
man.render(".out-1");

class Employer extends Man {
    constructor(name, age, sex,create , iin, salary) {
        super(name, age, sex);
        this.create = create;
        this.iin = iin;
        this.salary = salary;
    }
    // render(x) {
    //     let out = `Name: ${this.name}, Age: ${this.age}, Sex: ${this.sex}, 
    //                 Create: ${this.create}, Iin: ${this.iin}, Salary: ${this.salary}`;
    //     document.querySelector(x).innerHTML = out;
    // }

    get name() {
        return this._name;
    }

    set name(name) {
        if(typeof name === 'string') {
            this._name = name.trim();
        } else {
            console.log("Input correct name");
        }
    }

    render(x) {
        super.render(x);
        let out = ` Create: ${this.create}, Iin: ${this.iin}, Salary: ${this.salary}`;
        document.querySelector(x).innerHTML +=  out;
    }
    
}
const employer = new Employer("Ted", 44, "M", "22-12-01", 12, "2500$");
console.log(employer);
employer.render(".out-2");

//getter and setter
employer.name = "    Vasiliy";
console.log(employer.name);