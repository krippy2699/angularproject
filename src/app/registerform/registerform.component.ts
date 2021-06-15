import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gettingrestname(restname: any)
  {
    console.log(restname);
  }

  gettingaddy(restaddy:any)
  {
    console.log(restaddy);
  }

  gettingrestowvername(restownername : any)
  {
    console.log(restownername);
  }

  gettingrestemail(restemail : any)
  {
    console.log(restemail);
  }

  gettingrestnumber(restnumber : any)
  {
    console.log(restnumber);
  }

  gettingrestpass(restpass : any)
  {
    console.log(restpass);
  }

}
