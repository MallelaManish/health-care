export class User {

    userId:number;
    username:string;
    fullName:string;
    password:string;
    contactNumber:number;
    userRole:string;
    userAge:number;
    userGender:string;
    emailId:string;
    
    public User(userId:number,username:string,fullName:string,password:string,contactNumber:number,
        userRole:string,userAge:number,userGender:string,emailId:string){

            this.userId=userId;
            this.username=username;
            this.fullName=fullName;
            this.password=password;
            this.contactNumber=contactNumber;
            this.userRole=userRole;
            this.userAge=userAge;
            this.userGender=userGender;
            this.emailId=emailId;
    }
  

}
