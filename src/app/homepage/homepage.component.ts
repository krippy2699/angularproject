import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{KitchenService} from '../service/kitchen.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // constructor(){}
  // ngOnInit():void{}
 // private kitchenService: KitchenService, 

  constructor (private kitchenService: KitchenService, private router: Router) { }

 public kitchendata: any;
 public error : any;


  ngOnInit(): void {
    this.kitchenService.getKitchen().subscribe(
      (data) => {this.kitchendata = data; console.log(data)},
      (error) => this.error = error,
      () => console.log('done!')
    )
  }
Pickid(kitchen : any){
  this.router.navigate(['/kitchendata/',kitchen.id]);
}



}
