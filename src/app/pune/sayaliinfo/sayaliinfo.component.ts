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
  
  sayaliurl="https://www.shutterstock.com/image-photo/beautiful-focused-pastry-chef-woman-600nw-1877250850.jpg";
  url="https://img.freepik.com/premium-photo/whole-fancy-chocolate-cake-white-background_908985-33714.jpg";
  url2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tHhnxoUtxHSYWJw7sFkwkYZ8-_RAl9mVCQ&s";
  url3="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2023-01-Chocolate-Strawberry-Cakes%2Fchocolate-strawberry-cake-1"; 


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
