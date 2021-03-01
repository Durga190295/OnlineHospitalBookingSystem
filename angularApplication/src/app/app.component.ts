import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8ClientCrud';
  constructor(public dialog: MatDialog){
   
  }
  openDialog() {
    this.dialog.open(AddAppointmentComponent,{maxHeight: '90vh'});
  }
}
