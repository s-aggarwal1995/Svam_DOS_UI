import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boro-report',
  templateUrl: './boro-report.component.html',
  styleUrls: ['./boro-report.component.css']
})
export class BoroReportComponent implements OnInit {

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
