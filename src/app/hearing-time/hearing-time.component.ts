import { AgencyHearingtimeService } from './../services/agency-hearingtime.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hearing-time',
  templateUrl: './hearing-time.component.html',
  styleUrls: ['./hearing-time.component.css']
})
export class HearingTimeComponent implements OnInit {

  hearingTimes;

  constructor(private router: Router, private aht: AgencyHearingtimeService) { }

  ngOnInit() {
    if (!localStorage.getItem('userName')) {
      this.router.navigate(['login']);
    }

    this.aht.getHearingTime().subscribe(
      response => {
        console.log(response);
        this.hearingTimes = response;
      }
    )
  }

  

  save(f){
    console.log(f);
    let hearingTime = f.value.hearingTime;
    let isMobileRecord = f.value.isMobileRecord == 'Yes'? 1 : 0 ;
    let agency = f.value.selectAgency;
    console.log('ISMOBILE:'+isMobileRecord)
    this.aht.saveHearingTime(hearingTime,isMobileRecord,agency).subscribe(
      response =>{console.log(response)}
      ,error => {console.log(error)
        if(error['status'] == 200){

          this.aht.getHearingTime().subscribe(
            response => {
              console.log(response);
              this.hearingTimes = response;
            }
          )

        }

      });

  }

}
