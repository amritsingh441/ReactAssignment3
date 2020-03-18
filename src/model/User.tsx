class User{
    id : number;
    username : string;
    password : string
    constructor(username:string,password:string){
        this.id = Math.random()*1000;
        this.username = username;
        this.password = password;
    }
}
export default User;