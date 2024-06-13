
let colors:string[] = ['red','blue','yellow'];

console.log(colors);

//boolean
let truths:boolean[] = [true,true,false,true];

console.log(truths);

//any
let data:any[] = [true,150,'green'];
console.log(data);

// list can change data order -->mutable
data[0] = 3.556;
console.log(data);

//tuple  can't change order --> immutable
let dataother:[number,string,boolean] = [10,'hh',true];
console.log(dataother);

dataother[0] = 20;
console.log(dataother);


//map method

let cars:string[] = ['nissan','toyota','bmw','memo'];

cars.map((car) =>{
    console.log(car);
});

//2
let nums:number[]=[1,2,3,4,5];
let nums2:number[]=nums.map((n => n*2))

console.log(nums2);

//object loop
const pepsi = {
    color:'black',
    sugar:40,
};
let cocoa = {
    color:'brown',
    sugar:50,
};
let orange = {
    color:'green',
    sugar:30,
};
let cream = {
    color:'pink',
    sugar:45,
};

// let drinks:{color:string,sugar:number}[]= [pepsi,cocoa,orange,cream];

// console.log(drinks);

let drinks = [
    {color:'black',sugar:50},
    {color:'red',sugar:40},
    {color:'green',sugar:34},
    {color:'brown'},
];

console.log(drinks);

// let drinksmap [] = drinks.map(drink => ({
//     color:drink.color.toUpperCase(),
//     sugar?:drink.sugar*2
// }));

// console.log(drinksmap);

drinks.map((drink:{color:string,sugar?:number}) => {
    console.log(drink);
})