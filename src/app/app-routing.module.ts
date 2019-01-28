import { ViolationSearchComponent } from './violation-search/violation-search.component';
import { BoroReportComponent } from './boro-report/boro-report.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ManageDailysetupComponent } from './manage-dailysetup/manage-dailysetup.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { TicketInformationComponent } from './ticket-information/ticket-information.component';

const routes: Routes = [
{path : '' , component: LoginComponentComponent},
{path : 'adduser' , component: AddUserComponent},
{path : 'bororeport' , component: BoroReportComponent},
{path : 'equipment' , component: EquipmentComponent},
{path : 'managedailysetup' , component: ManageDailysetupComponent},
{path : 'manageusers' , component: ManageUsersComponent},
{path : 'ticketinformation' , component: TicketInformationComponent},
{path : 'violationsearch' , component: ViolationSearchComponent},
{path : 'login' , component: LoginComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
