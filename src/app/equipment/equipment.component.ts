import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

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
