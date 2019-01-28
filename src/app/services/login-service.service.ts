import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

private url ="http://localhost:8080/login?user="

  constructor(private http:Http) { }

  isLoginOk(email,pass){
     return this.http.get(this.url+email+"&pass="+pass);
  }
}
