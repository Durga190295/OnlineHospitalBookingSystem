import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { SlotDetailsComponent } from './components/slot-details/slot-details.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'appointments', component: AppointmentsListComponent },
  { path: 'appointments/:phone', component: SlotDetailsComponent },
  { path: 'add', component: AddAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
