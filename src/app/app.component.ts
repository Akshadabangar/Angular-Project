import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { switchMap } from 'rxjs';
//  import  dbase from '../assets/database.json'
//  import location from '../assets/vendors.json'

// interface myvendors {
// id:number;
// Name:string;
// Address:string;

// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent 
{
  vendorService: any;
  vendors: any;
  constructor(){}

 
  showVendors(city: string) {
    this.vendors = this.vendorService.getVendorsByCity(city);
  }
  

  
}


