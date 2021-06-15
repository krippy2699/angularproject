import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workhourform',
  templateUrl: './workhourform.component.html',
  styleUrls: ['./workhourform.component.css']
})
export class WorkhourformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  gettingstarttime(starttime : any)
  {
    console.log(starttime);
  }

  gettingendtime(endtime : any)
  {
    console.log(endtime)
  }

  gettingrestimg(restimg : any)
  {
    console.log(restimg);
  }




}
