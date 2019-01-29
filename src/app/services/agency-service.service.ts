import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgencyServiceService {

  private url ="http://localhost:8080/GetAgencies";
  private postURL ="http://localhost:8080/AddAgency";

  constructor(private http:HttpClient) { }

  getAgencies(){
    return this.http.get(this.url);
 }

 setAgencies()
 {
    // let  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
   
    let _input = JSON.parse(JSON.stringify({
      'agencyName' : 'dept of sanitation',
      'agencyDesc' : 'Sanitation enforcement agents'
      }));

      console.log(_input);
    return this.http.post(this.postURL,_input);
 }
}
