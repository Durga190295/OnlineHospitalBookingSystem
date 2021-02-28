import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  Appointments: any;
  currentTutorial = null;
  currentIndex = -1;
  name = '';
  slot: []

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.retrieveAppointments();
   
  }
  
  onKeyUpEvent(event: any){

    console.log(event.target.value);
    if(event.target.value == ""){
      this.retrieveAppointments();
    }else{
      this.searchTitle();
    }
  }
  retrieveAppointments() {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.Appointments = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveAppointments();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveAppointment(slot, index) {
    this.currentTutorial = slot;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  deleteSlot(slotId) {
    this.tutorialService.delete(slotId)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAppointments();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle() {
    this.tutorialService.findByPatientName(this.name)
      .subscribe((res: any[]) => {      
          this.Appointments = res;
          console.log(this.Appointments);
        },
        error => {
          console.log(error);
        });
  }
}
