import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuneComponent } from './pune/pune.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { NashikComponent } from './nashik/nashik.component';
import { AkshadainfoComponent } from './pune/akshadainfo/akshadainfo.component';
import { SonaliinfoComponent } from './pune/sonaliinfo/sonaliinfo.component';
import { SayaliinfoComponent } from './pune/sayaliinfo/sayaliinfo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PuneComponent,
    MumbaiComponent,
    NashikComponent,
    AkshadainfoComponent,
    SonaliinfoComponent,
    SayaliinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
