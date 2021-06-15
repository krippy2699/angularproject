import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit {
  private addstatus : boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  public addmenuitem()
  {
    this.addstatus = true;
    console.log(this.addstatus);
  }
}
