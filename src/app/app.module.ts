import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViolationSearchComponent } from './violation-search/violation-search.component';
import { TicketInformationComponent } from './ticket-information/ticket-information.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageDailysetupComponent } from './manage-dailysetup/manage-dailysetup.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { BoroReportComponent } from './boro-report/boro-report.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { LoginServiceService } from './services/login-service.service';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AgencyComponent } from './agency/agency.component';
import { HearingTimeComponent } from './hearing-time/hearing-time.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    ViolationSearchComponent,
    TicketInformationComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LoginComponentComponent,
    ManageUsersComponent,
    ManageDailysetupComponent,
    EquipmentComponent,
    BoroReportComponent,
    AddUserComponent,
    ManageUserComponent,
    AgencyComponent,
    HearingTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
