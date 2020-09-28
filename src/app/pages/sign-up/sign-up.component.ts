
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  empid:string;
  phoneno:number;
  name:string;
  fullname:string;
  userType:string;
  age:number;
  pass:string;

  constructor() { }


  ngOnInit(): void {
  }

}
