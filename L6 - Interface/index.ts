interface vehicle {
    modelname:string;
    year:number;
    broken:boolean;
    details(): string;
}

const oldvehicle : vehicle = {
    modelname:'car',
    year:2000,
    broken:false,
    details():string {
        return `Name: ${this.modelname}, year: ${this.year}`
    },
};

console.log(oldvehicle.details());


// Extends

interface basemodel{
    id:number;
}

interface person {
    name:string;
    age:number;
}

interface user extends basemodel,person{
    userdetails():void;
}

const niru:user = {
    id:1,
    name:'nikal',
    age:27,
    userdetails():number{
        console.log(this.name);
        return this.age;
    }
};

console.log(niru.userdetails());

