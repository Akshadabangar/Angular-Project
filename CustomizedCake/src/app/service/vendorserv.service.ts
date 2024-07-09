import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorservService {

 store:any;
storecake:any;

  private vendorsurl='/assets/vendors.json';
  private locationurl='/assets/location.json';

  constructor(private http:HttpClient) { }

  getVendors():Observable<any>{
    return this.http.get<any>(this.vendorsurl);
  }

  getLocation():Observable<any>{
   
    return this.http.get<any>(this.locationurl);
  }


  
  method1(info:string):void
   {
    this.store=info;
    
   }


   cakemethod(info1:string):void
   {
    this.storecake=info1;
   
   }
}
