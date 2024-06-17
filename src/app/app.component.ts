import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  /*
  latitude: number=0;
  longitude: number=0;
  locationError:string | undefined;

  constructor() {}

  ngOnInit(): void
  {
      this.getLocation();
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              this.locationError = 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              this.locationError = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              this.locationError = 'The request to get user location timed out.';
              break;
            
          }
        }
      );
    } else {
      this.locationError = 'Geolocation is not supported by this browser.';
    }
  }
*/


/*
title='Ip-gelication';
userIP='';

constructor(private httpClient:HttpClient){}
  ngOnInit(): void 
  {
    this.loadUserInfo();
  }

loadUserInfo(){
  
  this.httpClient.get('http://jsonip.com/')

.pipe(
  switchMap((value:any) =>{
    this.userIP=value.ip;
     let url = `https://api.ipstack.com/${value.ip}? access_key = `
    return this.httpClient.get(`url`);
  })
)

  .subscribe(
    (response:any) =>{
     console.log(response)
    },

     (error) =>{
      console.log(error)
     }
  )
}

*/

}



