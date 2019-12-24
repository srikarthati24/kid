import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(public router:Router ) { }
  buttoncontent:string;
  // dataSource :any[] =[{id:1,first_name:'srikar',last_name:'thati',mobile_no:9652871105,email:'srikar@pradiota.com'},
  // {id:2,first_name:'sashi',last_name:'sashi',mobile_no:9652871105,email:'srikar@pradiota.com'},
  // {id:3,first_name:'raghu',last_name:'raghu',mobile_no:9652871105,email:'srikar@pradiota.com'},
  // {id:4,first_name:'manasa',last_name:'manasa',mobile_no:9652871105,email:'srikar@pradiota.com'},];
  // displayedColumns: string[] = ['id', 'first_name','last_name', 'mobile_no','email','actions'];


  ngOnInit() {
    this.buttoncontent = "Save";
  }
  onsubmitclick(){
    if(this.buttoncontent =="Save"){
      this.router.navigate(['/list'])
    }
    
  }
}
