import { Component ,OnInit} from '@angular/core';
import { VendorservService } from './service/vendorserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'CustomizedCake';

  databasename: any;
  vendors:any[]=[];
  
  constructor(private vendorservService: VendorservService,private router:Router) {}

  ngOnInit(): void {
    this.vendorservService.getLocation().subscribe(
      (data) => {
        this.databasename = data; 
        
      }
    );
  }

  //BUTTON CLICK
 mymethod(city:string):void {
    this.vendorservService.getVendors().subscribe(
      (data)=>{
       const vendors=data[city];
        this.vendors=vendors;

        this.vendorservService.method1(city);

        this.router.navigate(['/vendors']); //routing method

      }
    );
    
    }

   
      

    }
   
    

