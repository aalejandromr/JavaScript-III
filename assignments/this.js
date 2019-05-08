/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding
* 2. Explicit binding
* 3. Global/Window
* 4. When creatinig new classes
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function showGlobal(){
    console.log(this);
}

// showGlobal();
// Principle 2

// code example for Implicit Binding

const me = {
    name: "Alejandro",
    age: 21,
    getJob: function(){
        console.log(`${this.name} got a job at the age of ${this.age}, thanks to Lambda`)
    }
}

me.getJob();
// Principle 3

// code example for New Binding
function me_f(name, age){
    this.name = name;
    this.age = age;
    this.getJob = function(){
        console.log(`${this.name} got a job at the age of ${this.age}, thanks to Lambda`);
    }
}

const is_me = new me_f("Alejandro", 21);
const is_my_bf = new me_f("Daniel", 21);
is_me.getJob();
is_my_bf.getJob();
// Principle 4

// code example for Explicit Binding

function Greeter(){
    return(`Hello -> ${this.name} <- Welcome to Lambda!`)
}

const alejandro = {
    name: "Alejandro"
}

const rick = {
    name: "Rick"
}

const greetAlejandro = Greeter.bind(alejandro);

console.log(Greeter.call(alejandro));
console.log(Greeter.apply(rick));
console.log(greetAlejandro()) // Binding it