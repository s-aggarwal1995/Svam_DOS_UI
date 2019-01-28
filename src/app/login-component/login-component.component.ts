import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  error=false;

  constructor(private loginService:LoginServiceService,private router:Router) { 
   
    if(localStorage.getItem('userName')){
      router.navigate(['managedailysetup']);
    }

  }

  log(f){
    console.log(f);
    this.loginService.isLoginOk(f.value.email,f.value.pass)
    .subscribe(
      response => {
        this.error=false;
        console.log(response.json());
        localStorage.setItem('userName',f.value.email);
        localStorage.setItem('agencyName',response.json().agencyName);
        localStorage.setItem('userId',response.json().userId);
        localStorage.setItem('agencyId',response.json().agencyId);
        localStorage.setItem('lastLogin',new Date().toString());
        setTimeout(function(){
          window.location.reload();
          this.router.navigate(['managedailysetup']);
        }, 1000);
        
        
      },
      ( error:Response) => {
        console.log(error);
        this.error=true;
      }
    )
  }


  ngOnInit() {
  }

}
