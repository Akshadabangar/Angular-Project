import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuneComponent } from './pune/pune.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { NashikComponent } from './nashik/nashik.component';
import { AkshadainfoComponent } from './pune/akshadainfo/akshadainfo.component';
import { SonaliinfoComponent } from './pune/sonaliinfo/sonaliinfo.component';
import { SayaliinfoComponent } from './pune/sayaliinfo/sayaliinfo.component';
import { FormsModule } from '@angular/forms';
import { BhavanaComponent } from './mumbai/bhavana/bhavana.component';
import { SakshiComponent } from './mumbai/sakshi/sakshi.component';
import { VidyaComponent } from './mumbai/vidya/vidya.component';
import { OmComponent } from './nashik/om/om.component';

import { KajalComponent } from './nashik/kajal/kajal.component';
import { HeenaComponent } from './nashik/heena/heena.component';
import { LocationComponent } from './location/location.component';

import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { VendorService } from './vendor.service';



@NgModule({
  declarations: [
    AppComponent,
    PuneComponent,
    MumbaiComponent,
    NashikComponent,
    AkshadainfoComponent,
    SonaliinfoComponent,
    SayaliinfoComponent,
    BhavanaComponent,
    SakshiComponent,
    VidyaComponent,
    OmComponent,
   KajalComponent,
    HeenaComponent,
    LocationComponent,
  
    CakedetailsComponent,
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  HttpClientModule
  ],
  providers: [

    provideClientHydration(),
    VendorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
