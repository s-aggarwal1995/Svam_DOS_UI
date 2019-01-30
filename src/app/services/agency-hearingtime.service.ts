import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgencyHearingtimeService {

  private url ="http://localhost:8080/GetHearingTime";
  private postUrl ="http://localhost:8080/SaveHearingTime"

  constructor(private http:HttpClient) { }

  getHearingTime(){
    return this.http.get(this.url);
  }

  saveHearingTime(hearingTime,isMobileRecord,agency){
    let _input = JSON.parse(JSON.stringify({
      'hearingTime' : hearingTime ,
      'isMobileRecords' : isMobileRecord,
      'agencyName': agency
      }));

      console.log(_input);
     return this.http.post(this.postUrl,_input);
  }
}
