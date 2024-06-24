import { Component,OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import location from '../assets/vendors.json'

// interface myvendors {
// id:number;
// Name:string;
// Address:string;

// }

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})

export class LocationComponent {

  // constructor(){}
  // vendors1:myvendors[]=location.Pune;

  
  vendors: any;
  selectedlocation: any;

  constructor(private vendorService: VendorService) {}

  ngOnInit() {
    this.vendorService.getVendors().subscribe(
      data => {
        this.vendors = data.vendors;
      }
      
    );
  }

  showVendors(location: string) {
    this.selectedlocation = location;

}


}