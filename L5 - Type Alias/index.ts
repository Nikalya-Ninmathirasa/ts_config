type User = {id:number; username:string; isActive:boolean}

const vys : User = {
    id:1,
    username: 'vyshali',
    isActive: true
};

const kamal : User = {
    id:2,
    username: 'kamal',
    isActive: false
};

const raj : User = {
    id:3,
    username: 'raj',
    isActive: true
};

let details = (user:User):void => {
 console.log(user);
}

details(vys);
details(kamal);
details(raj);

// union Type

type stringornum = string |  number;

let x:stringornum = 'y';

console.log(x);

type Theme = 'dark' | 'light' | 'medium';

let color: Theme = 'medium'

console.log(color);