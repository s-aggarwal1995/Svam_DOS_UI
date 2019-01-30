import { EquipmentServiceService } from './../services/equipment-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(private router:Router,private equipmentService: EquipmentServiceService) { }

  equipments;

  ngOnInit() {
    if(!localStorage.getItem('userName')){
      this.router.navigate(['login']);
    }
    this.equipmentService.getEquipmentsByDeviceType('PRINTER').subscribe(response =>{
      console.log(response);
      this.equipments = response;
      console.log(this.equipments);
    })
  }
  log(f){
    console.log(f);
    this.equipmentService.getEquipmentsByDeviceType(f.value.deviceType).subscribe(response =>{
      console.log(response);
      this.equipments = response;
      console.log(this.equipments);
    })
  }


  

}
