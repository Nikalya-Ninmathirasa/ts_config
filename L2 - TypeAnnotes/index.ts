
let username:string = 'Niru';

console.log(username);

let age:number =16;

console.log(age);

let isadult:boolean = age>18;

console.log(isadult);

let isdid!:boolean;

console.log(isdid);

let a:number = 3.56667;

console.log(a);

//any  ---> datatype
let unknown:any = true;

console.log(unknown);

let nothing:null =null;

console.log(nothing);

let anything : undefined;

console.log(anything);

let b;

console.log(b);


// Type Inference
let university = "mora university";
let balanace = 25000;
let isnull = false;


//  Union Type --->pipes (both string & number)
let billamount:number | string = "1000";

billamount =1000;
console.log(billamount);


//  Literal value Type
let trafsignal: 'red' | 'yellow' | 'green';
trafsignal='green';
console.log(trafsignal);

//object
let vehicle:{model:string;speed:number;isproduction:boolean} = {
    model:'Nissan',
    speed: 160,
    isproduction:true
}

console.log(vehicle);


// Destructuring
const {model,speed} = vehicle;
console.log(model,speed);


let numbers = [1, 2, 3, 4, 5];
let [first, second, , fourth] = numbers;

console.log(first,second, fourth);




