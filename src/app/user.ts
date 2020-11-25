export class User {
    id:number;
    Username:string;
    Password:string;
    Email:string;
    Firstname:string;
    Lastname:string;
    constructor(id:number,Username:string,Password:string,Email:string,Firstname:string,Lastname:string){
        this.id=id;
        this.Username=Username;
        this.Password=Password;
        this.Email=Email;
        this.Firstname=Firstname;
        this.Lastname=Lastname;
    }

}
