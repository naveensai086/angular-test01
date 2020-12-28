import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoCreate(){
    console.log("hii");
    this.router.navigate(['customers/create'])
    
  }
}
