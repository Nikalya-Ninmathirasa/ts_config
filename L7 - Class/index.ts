class Users{
    // public id:number;
    // public name:string;
    // public location:string;
    // public salary:number;


constructor(
    public id:number, 
    public name:string,
    public location:string,
    public salary:number)
{} 


public userdetails():any{
    return(`id:${this.id}, name:${this.name},location:${this.location}`)
}

public salarydetails():number{
    return this.salary *2;
}
}


let nirushanth = new Users(1,'Niru','Jaffna',50000);

let w = nirushanth.userdetails();
let z = nirushanth.salarydetails();

console.log(w);
console.log(z);

