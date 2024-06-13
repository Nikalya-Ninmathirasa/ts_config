function welcome(msg:string):void{ 
    console.log(`welcome ${msg}`);
   // return 30;
}

// let x:number = welcome();
// console.log(x);
welcome('nice to meet you')


//2
function add(x:number,y:number):boolean{
    if(x>y){
        return true;
    }
    return false;
}

console.log(add(40,20));

// Arror function
const logger = (logmsg:string) :string => {
    return logmsg;
};

let h:string = logger('Error 404');
console.log(h);


// anonymus function
const multiple = function(a:number,b:number) :number{
    return a*b;
};

console.log(multiple(10,2));

// Union Type
function chatbot(input:string|number):void{
    if(typeof input === 'number'){  //=== is same for ==
        console.log(input*3);
    }
    console.log(input);
}

chatbot(10);

// object in function

function register({username,age}:{username:string;age:number}) : 
{username:string;age:number;isValid:boolean}{
    return {username,age,isValid:age>15};
}

console.log(register({username:'nnn',age:13}));


