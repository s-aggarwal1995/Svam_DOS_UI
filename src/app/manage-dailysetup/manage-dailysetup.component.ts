import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-dailysetup',
  templateUrl: './manage-dailysetup.component.html',
  styleUrls: ['./manage-dailysetup.component.css']
})
export class ManageDailysetupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem('userName')){
      this.router.navigate(['login']);
    }
  }

  log(f){
    console.log(f);
  }

}
