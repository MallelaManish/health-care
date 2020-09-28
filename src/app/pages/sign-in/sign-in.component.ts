import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  empid:string;
  pass:string;
  name:string;
  userType;

  constructor(private authService:AuthService, 
    private router:Router,
    private toastr:ToastrService){}
      
   
  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
     const{ email,password} =f.form.value;
  }
       

  


 
  


}
