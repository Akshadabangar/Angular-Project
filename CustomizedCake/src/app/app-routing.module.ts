import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';
import { CakeComponent } from './cake/cake.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [

  {path:'vendors',component:VendorsComponent},
  {path:'cake',component:CakeComponent},
  {path:'order',component:OrderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
