import { Component } from '@angular/core';

@Component({
  selector: 'app-vidya',
  templateUrl: './vidya.component.html',
  styleUrl: './vidya.component.css'
})
export class VidyaComponent {

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
  
  vidyaurl="https://static.vecteezy.com/system/resources/previews/024/573/895/large_2x/cute-girl-smiling-baking-homemade-birthday-cake-with-chocolate-icing-generated-by-ai-free-photo.jpg";
  url="https://assets.winni.in/product/primary/2021/8/53442.jpeg?dpr=1&w=500";
  url2="https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg";
  url3="https://assets.giftalove.com/resources/common/giftimages/productimage2/tasteful-butterscotch-cake.jpg"; 


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
