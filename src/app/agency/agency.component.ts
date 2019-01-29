import { AgencyServiceService } from './../services/agency-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  constructor(private agencyService: AgencyServiceService) { }

  agencies;

  addValue(){
    this.agencyService.setAgencies()
    .subscribe(response=>{
      console.log(response);
      if(response['status'] == 200){
         console.log('status is 200'); 
      }
    },
    error=>{
      console.log(error);
      if(error['status'] == 200){
        console.log('status is 200'); 
        this.agencyService.getAgencies().subscribe(
          response =>{
            console.log(response);
            this.agencies = response;
          },
          error=>{
            console.log(error);
          }
        );
     }
    });;
  }

  ngOnInit() {
    this.agencyService.getAgencies().subscribe(
      response =>{
        console.log(response);
        this.agencies = response;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
