import { Component, OnInit} from '@angular/core';
import { VendorservService } from '../service/vendorserv.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent {
  
  varr1:any;
  vendors:any;
  
  showtextBox:boolean=false;
  orderText:string='';

  constructor(private vendorservService: VendorservService){}

  ngOnInit(): void{

    this.vendorservService.getVendors().subscribe(
      data=>{
        this.vendors=data;
      },
      );

this.varr1=this.vendorservService.storecake;

  }

 textbox(){
this.showtextBox=!this.showtextBox
  }

}
  


