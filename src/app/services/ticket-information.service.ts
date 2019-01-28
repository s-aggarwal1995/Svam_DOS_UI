import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TicketInformationService {

  private url ="http://localhost:8080/GetTicketRange/"

  constructor(private http:Http) { }

  getTicketInformation(deviceId){
    return  this.http.get(this.url+deviceId);
  }
}
