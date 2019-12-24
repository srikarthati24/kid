import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  dataSource :any[] =[{id:1,first_name:'srikar',last_name:'thati',mobile_no:9652871105,email:'srikar@pradiota.com'},
  {id:2,first_name:'sashi',last_name:'sashi',mobile_no:9652871105,email:'srikar@pradiota.com'},
  {id:3,first_name:'raghu',last_name:'raghu',mobile_no:9652871105,email:'srikar@pradiota.com'},
  {id:4,first_name:'manasa',last_name:'manasa',mobile_no:9652871105,email:'srikar@pradiota.com'},];
  displayedColumns: string[] = ['id', 'first_name','last_name', 'mobile_no','email','actions'];
  constructor() { }

  ngOnInit() {
  }

}
