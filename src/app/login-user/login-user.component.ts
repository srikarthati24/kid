import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor() { }
  buttoncontent:string;
  username:string;
  password:string;
  ngOnInit() {
    this.buttoncontent="Save";
  }
  onsubmitclick(){

  }
}
