import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorsComponent } from './vendors/vendors.component';
import { CakeComponent } from './cake/cake.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
 VendorsComponent,
 CakeComponent,
 OrderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
