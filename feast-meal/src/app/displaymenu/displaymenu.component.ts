import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { KitchenserviceService } from '../service/kitchenservice.service';

@Component({
  selector: 'app-displaymenu',
  templateUrl: './displaymenu.component.html',
  styleUrls: ['./displaymenu.component.css']
})
export class DisplaymenuComponent implements OnInit {
public KitchenId: any;
public kitchendata: any;
public errormess:any;

  constructor(private kitchenService:KitchenserviceService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.KitchenId= id;
      console.log(this.KitchenId);
    });
    this.kitchenService.getKitchenById(this.KitchenId).subscribe(
      (data) => {
        this.kitchendata = data;
        console.log(data);
      },
      (error) => {this.errormess = error; console.log(error); }
    )
  }

}
