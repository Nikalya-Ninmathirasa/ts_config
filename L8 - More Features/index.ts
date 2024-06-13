enum Server {
    Success=200, // Success =200 is default value based on our desire
    Error =500,
}

console.log(Server);

interface Response{
    result:Server;
    message:string;
}

function request():Response{
    return {result:Server.Success,message:'Data Fetched'}
}

console.log(request());

function requestTwo():Response{
    return {result:Server.Error,message:'Data  is not Fetched'}
}

console.log(requestTwo());

// Type Assertion;
let message:any = 'this is message';

let strmsg:string = message as string;

console.log(strmsg);

let msglength:number = (message as string).length;

console.log(msglength);


//object
let audi = '{"name":"A6","price":"500000"}';
let bmw = '{"name":"M5","price":"700000"}';

let audiObj = JSON.parse(audi);
let bmwObj = JSON.parse(bmw);

console.log(audiObj);

type car = {
    name:string;
    price:number;
}

let audicar:car = audiObj as car;

console.log(audicar);

let bmwcar :car = bmwObj as car

console.log(bmwcar);


// Type Guard
type DataType = number | string;

function DataProcessor (data: DataType) {
    if (typeof data === 'string') {
         return parseInt(data);
    } else {
         return data.toString();
    }
 }
   
    console.log(DataProcessor ((340.5))); 
