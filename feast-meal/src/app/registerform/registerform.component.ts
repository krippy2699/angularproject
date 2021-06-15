import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { KModel } from 'src/Model/KModel';
import { KitchenserviceService } from '../service/kitchenservice.service';



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor(private kservice:KitchenserviceService) { }

  providers : any;
  errormsgvar : any;
  saved : any;
  public kitchmodelobj = new KModel();


  ngOnInit(): void {

  }

  onSubmit(providersregform: any )
  {
    console.log(this.kitchmodelobj);
    this.kservice.postKitchen(this.kitchmodelobj).subscribe(
      (data) => this.providers = data,
      (error) => this.errormsgvar = error
    )
  }

  datasaved()
  {
    this.saved = true;
  }

}
