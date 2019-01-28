import { TicketInformationService } from './../services/ticket-information.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-information',
  templateUrl: './ticket-information.component.html',
  styleUrls: ['./ticket-information.component.css']
})
export class TicketInformationComponent implements OnInit {

  constructor(private ticketInformationService: TicketInformationService,private router:Router) { }

  summaryData:any[];

  ngOnInit() {
    if(!localStorage.getItem('userName')){
      this.router.navigate(['login']);
    }
  }
  log(f){
    console.log(f.value.deviceId);
    this.ticketInformationService.getTicketInformation(f.value.deviceId).subscribe(e=> {
      console.log(e.json());
      this.summaryData = e.json().summarydata;
      console.log(this.summaryData);
    })
  }

}
