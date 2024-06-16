import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { PuneComponent } from './pune/pune.component';
import { NashikComponent } from './nashik/nashik.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { AkshadainfoComponent } from './pune/akshadainfo/akshadainfo.component';
import { SonaliinfoComponent } from './pune/sonaliinfo/sonaliinfo.component';
import { SayaliinfoComponent } from './pune/sayaliinfo/sayaliinfo.component';

const routes: Routes = [

  {path:'pune',component:PuneComponent},
  {path:'mumbai',component:MumbaiComponent},
  {path:'nashik',component:NashikComponent},
  {path:'akshada',component:AkshadainfoComponent},
  {path:'sonali',component:SonaliinfoComponent},
  {path:'sayali',component:SayaliinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
