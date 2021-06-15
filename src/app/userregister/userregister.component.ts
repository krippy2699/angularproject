import { Component, OnInit } from '@angular/core';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gettingrestname(firstName: any)
  {
    console.log(firstName);
  }

  gettinglastName(lastName:any)
  {
    console.log(lastName);
  }

  gettingemail(Email:any)
  {
    console.log(Email);
  }

  gettinguserpass(userpass:any)
  {
    console.log(userpass);
  }


}
