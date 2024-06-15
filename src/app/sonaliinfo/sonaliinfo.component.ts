import { Component } from '@angular/core';

@Component({
  selector: 'app-sonaliinfo',
  templateUrl: './sonaliinfo.component.html',
  styleUrl: './sonaliinfo.component.css'
})
export class SonaliinfoComponent {

  flavour:string="Fruit Cake";
  ingredients: string[] = ['Flour', 'Sugar', 'Fruit', 'Nuts'];
  description: string = 'Our homemade fruit cake is a delightful blend of rich flavors and wholesome ingredients.';
  price: number = 5;
  
  flavour1:string="Chocolate";
  ingredients1: string[] = ['Flour', 'Sugar', 'Butter', 'Coco Powder'];
  description1: string = 'A rich and moist chocolate cake that is perfect for any occasion.';
  price1: number = 6;
  
  flavour2:string="Butterscotch";
  ingredients2: string[] = ['Flour', 'Sugar', 'Butter', 'Eggs'];
  description2: string = 'Butterscotch cake is a delicious dessert made with butterscotch flavoring,';
  price2: number = 7;
  
 
  url="https://i1.fnp.com/images/pr/uk/x/v20201016201146/fruit-cake_1.jpg";
  url2="https://cdn.shopify.com/s/files/1/0670/2659/products/Chocolate_Bliss_Birthday.jpeg?v=1493092157";
  url3="https://cdn.dotpe.in/longtail/store-items/7824589/WtGOEN9y.jpeg"; 


  showtextbox1:boolean=false;
  orderText1:string='';

  showtextbox2:boolean=false;
  orderText2:string='';

  showtextbox3:boolean=false;
  orderText3:string='';

  //fst cake order and submit
  textbox1(){
   this.showtextbox1=!this.showtextbox1;
  }

  submitOrder1(){
    console.log('Order Submitted..',this.orderText1)
    this.orderText1='';
    this.showtextbox1=false;
  }

//second cake order and submit
  textbox2(){
    this.showtextbox2=!this.showtextbox2;
   }
 
   submitOrder2(){
     console.log('Order Submitted..',this.orderText2)
     this.orderText2='';
     this.showtextbox2=false;
   }

   //third cake order and submit
   textbox3(){
    this.showtextbox3=!this.showtextbox3;
   }
 
   submitOrder3(){
     console.log('Order Submitted..',this.orderText3)
     this.orderText3='';
     this.showtextbox3=false;
   }






}
