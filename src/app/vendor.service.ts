import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class VendorService {

  private vendorsUrl = '/assets/vendors.json';

  constructor(private http:HttpClient) {}

  getVendors(): Observable<any> {
  return this.http.get<any>(this.vendorsUrl);
}

}