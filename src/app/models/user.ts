;

export class User {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    plateNumber: string;
    id: number;
    password: string;
    
    constructor(id:number, 
         email:string, 
         username: string, 
         firstName: string, 
         lastName: string, 
         plateNumber: string, 
         password: string ) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.plateNumber = plateNumber;
        this.password = password;
    }
}