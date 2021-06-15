import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IKitchen } from 'src/Model/KitchenModel';


@Injectable({
  providedIn: 'root'
})
export class KitchenserviceService {

  private kitchenapi : string = "http://localhost:4000/kitchendata";

  constructor(private http : HttpClient) { }

  public getKitchen() : Observable <IKitchen[]>
  {
    return this.http.get<IKitchen[]>(this.kitchenapi)
    .pipe(catchError(this.errorhandler));
  }

  public postKitchen(KitchData:any) : Observable <IKitchen[]>
  {
    return this.http.post<IKitchen[]>(this.kitchenapi,KitchData)
    .pipe(catchError(this.errorhandler));
  }

  public getKitchenById(id : number) : Observable <IKitchen[]>
  {
    return this.http.get<IKitchen[]>(this.kitchenapi + '/' + id).pipe(catchError(this.errorhandler));
  }


  public errorhandler(error:HttpErrorResponse)
  {
    return throwError(error.message || "Server Error !");
  }

}




