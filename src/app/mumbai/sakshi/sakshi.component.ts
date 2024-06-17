import { Component } from '@angular/core';

@Component({
  selector: 'app-sakshi',
  templateUrl: './sakshi.component.html',
  styleUrl: './sakshi.component.css'
})
export class SakshiComponent {

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
  
  sakshiurl="https://media.gettyimages.com/id/1017465958/photo/a-young-girl-icing-homemade-cake-top-in-a-kitchen.jpg?s=612x612&w=gi&k=20&c=PkcgKV8V2ojbdaUZCBbXiGs-C6eU8QzeoBYBV1J-xaY=";
  url="https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb-480x270.jpg";
  url2="https://alittlecake.com/wp-content/uploads/2023/07/Fondant-Iced-Wedding-Cakes-With-Sculpted-Flowers.jpg";
  url3="https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/234187ae/strawberry-cake.jpg"; 
  
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
    console.log('Order submitted:', this.orderText);
      
      this.orderText = '';
      this.showTextBox = false;
  }
  
  //CAKE 2 ORDER AND SUBMIT
  textbox1(){
    this.showTextBox1 = !this.showTextBox1;
  }
  
  submitOrder1(){
    console.log('Order submitted:', this.orderText1);
      
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
