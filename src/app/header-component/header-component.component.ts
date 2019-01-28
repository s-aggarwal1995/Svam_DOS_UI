import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  userName:string;
  myDate;

  constructor(private router:Router) { }

  ngOnInit() {
   this.userName =  localStorage.getItem('userName');
   this.myDate = localStorage.getItem('lastLogin')
  }

  logout(){
    console.log('logout method has been called');
    localStorage.clear();
    this.userName='';
    this.myDate ='';
    this.router.navigate(['/']);

  }
}
