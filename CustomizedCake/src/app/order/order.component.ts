import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orderText:string='';
  orderName:string='';
  orderNumber:number=91;
  orderSelect:string='';
  orderDate:Date | undefined;
  orderAddress:string='';


  submitOrder(){
       console.log("order submited : ",this.orderName,this.orderNumber,this.orderSelect,this.orderDate,this.orderAddress);
       this.orderText='';
       this.orderName='';
       this.orderNumber;
       this.orderSelect='';
       this.orderDate;
       this.orderAddress='';
      
   }

}
