import { Component } from '@angular/core';

@Component({
  selector: 'app-sayaliinfo',
  templateUrl: './sayaliinfo.component.html',
  styleUrl: './sayaliinfo.component.css'
})
export class SayaliinfoComponent {

  flavour:string="Chocolate";
  ingredients: string[] = ['Flour', 'Sugar', 'Butter', 'Coco Powder'];
  description: string = 'A rich and moist chocolate cake that is perfect for any occasion.';
  price: number = 5;
  
  flavour1:string="Butterscotch";
  ingredients1: string[] = ['Flour', 'Sugar', 'Butter', 'Eggs'];
  description1: string = 'Butterscotch cake is a delicious dessert made with butterscotch flavoring,';
  price1: number = 6;
  
  flavour2:string="Strawberry";
  ingredients2: string[] = ['Flour', 'Sugar', 'Butter', 'Strawberries'];
  description2: string = 'Strawberry cake is a delicious dessert made with Strawberry flavoring,';
  price2: number = 7;
  
  
  url="https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg";
  url2="https://images.squarespace-cdn.com/content/v1/57436135746fb9854e890df5/1571862502957-4EU7Z27SDWSRSXQ8XY8G/ke17ZwdGBToddI8pDm48kJb6FGUYafjh7GEl2R-viwcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2Px-K4etZrcbcMhUYMGWEXzYb5kEmBoKCWTa8yFY1ll-bhuOb0MAcXaQ6whlEkpec/MinnieUnicornCake.jpg?format=2500w";
  url3="https://i.pinimg.com/736x/5d/ed/18/5ded184aeb072ea1ae7ce7f90fb82d6c.jpg"; 


showtextbox1:boolean=false;
textOrder1:string='';

showtextbox2:boolean=false;
textOrder2:string='';

showtextbox3:boolean=false;
textOrder3:string='';

//fst cake order and submit
  textbox1(){
this.showtextbox1=!this.showtextbox1;
  }

  submitorder1(){
    console.log('order submitted',this.textOrder1)
    this.textOrder1='';
    this.showtextbox1=false;
  }

//second cake order and submit
  textbox2(){
    this.showtextbox2=!this.showtextbox2;
      }
    
      submitorder2(){
        console.log('order submitted',this.textOrder2)
        this.textOrder2='';
        this.showtextbox2=false;
      }

//third cake order and submit

textbox3(){
  this.showtextbox3=!this.showtextbox3;
    }
  
    submitorder3(){
      console.log('order submitted',this.textOrder3)
      this.textOrder3='';
      this.showtextbox3=false;
    }

}
