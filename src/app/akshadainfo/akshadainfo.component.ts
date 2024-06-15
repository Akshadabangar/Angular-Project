import { Component } from '@angular/core';

@Component({
  selector: 'app-akshadainfo',
  templateUrl: './akshadainfo.component.html',
  styleUrl: './akshadainfo.component.css'
})
export class AkshadainfoComponent {

flavour:string="Chocolate";
ingredients: string[] = ['Flour', 'Sugar', 'Butter', 'Coco Powder'];
description: string = 'A rich and moist chocolate cake that is perfect for any occasion.';
price: number = 5;


flavour1:string="Butterscotch";
ingredients1: string[] = ['Flour', 'Sugar', 'Butter', 'Eggs'];
description1: string = 'This cake has been made especially for younge children.';
price1: number = 6;


flavour2:string="Strawberry";
ingredients2: string[] = ['Flour', 'Sugar',  'Strawberries','Vanilla extract'];
description2: string = 'Strawberry cake is a delicious dessert made with Strawberry flavoring,';
price2: number = 7;


url="https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg";
url2="https://images.squarespace-cdn.com/content/v1/57436135746fb9854e890df5/1571862502957-4EU7Z27SDWSRSXQ8XY8G/ke17ZwdGBToddI8pDm48kJb6FGUYafjh7GEl2R-viwcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2Px-K4etZrcbcMhUYMGWEXzYb5kEmBoKCWTa8yFY1ll-bhuOb0MAcXaQ6whlEkpec/MinnieUnicornCake.jpg?format=2500w";
url3="https://i.pinimg.com/736x/5d/ed/18/5ded184aeb072ea1ae7ce7f90fb82d6c.jpg"; 

//DECLARE VARIAVLE OREDER BUTTON AND SUBMIT
showTextBox: boolean = false;
orderText: string = '';

showTextBox1: boolean = false;
orderText1: string = '';

showTextBox2:boolean=false;
orderText2:string='';

//CAKE 1 ORDER AND SUBMIT
TextBox(){
  this.showTextBox = !this.showTextBox;
}

submitOrder(){
  console.log('Order submitted:', this.orderText1);
    
    this.orderText = '';
    this.showTextBox = false;
}

//CAKE 2 ORDER AND SUBMIT
textbox1(){
  this.showTextBox1 = !this.showTextBox1;
}

submitOrder1(){
  console.log('Order submitted:', this.orderText);
    
    this.orderText1 = '';
    this.showTextBox1 = false;
}

//CAKE 3 ORDER AND SUBMIT
textbox2(){
 this.showTextBox2!=this.showTextBox2;
}

submitOrder2(){
  console.log('Order submitted:', this.orderText2)
  this.orderText2 = '';
    this.showTextBox2 = false;

}



}


