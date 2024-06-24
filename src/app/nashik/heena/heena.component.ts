import { Component } from '@angular/core';

@Component({
  selector: 'app-heena',
  templateUrl: './heena.component.html',
  styleUrl: './heena.component.css'
})
export class HeenaComponent {

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
  
  heenaurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcl_jpTzQ_9Scdkrts0RfRzSOugRtCNdmvQ&s";
  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3dU2YNn01QVCNDI5FLgsU0vBgwp_sSJx0Q&s";
  url2="https://thomsonline.in/wp-content/uploads/2019/08/BUTTERSCOTCH-CAKE-3-750x500.jpg";
  url3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3dU2YNn01QVCNDI5FLgsU0vBgwp_sSJx0Q&s"; 
  
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
