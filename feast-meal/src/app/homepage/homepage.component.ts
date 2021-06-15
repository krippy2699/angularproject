import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{KitchenserviceService} from '../service/kitchenservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private kitchenService: KitchenserviceService, private router: Router) { }

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
