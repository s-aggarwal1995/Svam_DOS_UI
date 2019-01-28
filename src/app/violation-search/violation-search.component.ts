import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-violation-search',
  templateUrl: './violation-search.component.html',
  styleUrls: ['./violation-search.component.css']
})
export class ViolationSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem('userName')){
      this.router.navigate(['login']);
    }
  }

  log(f){
    console.log(f.value)
  }

}
