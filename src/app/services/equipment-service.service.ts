import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {

  private url ="http://localhost:8080/GetEquipments/";

  constructor(private http:HttpClient) { }

  getEquipmentsByDeviceType(deviceType){
    return this.http.get(this.url+deviceType);
 }
}
