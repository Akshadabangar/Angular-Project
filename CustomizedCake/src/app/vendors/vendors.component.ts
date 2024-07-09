import { Component,OnInit} from '@angular/core';
import { VendorservService } from '../service/vendorserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css'
})
export class VendorsComponent implements OnInit{

  varr:any;
  vendors: any;
  
  

  constructor(private vendorservService: VendorservService, private router:Router) {}
  
  ngOnInit() {
    this.vendorservService.getVendors().subscribe(
      data => {
        this.vendors = data;  
      },
    );

     this.varr=this.vendorservService.store;  //method1
    
  }

  myMethod(cakeinfo:string):void {

   this.vendorservService.getVendors().subscribe(
    (data)=>{
      const vendors=data[cakeinfo];
      this.vendors=vendors;

      this.vendorservService.cakemethod(cakeinfo);
      
       this.router.navigate(['/cake']);  //routing

    }
   )


    }


}
