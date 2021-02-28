import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  
  appointment = {
    patientName: '',
    age: 0,
    sex:'',
    phone:'',
    description:'',
    fromTime:'',
    toTime:''
  };
  value: any;
  genders = [
{
    id: "male",
    value: 'male'
},
{
    id: "female",
    value: 'female'
}];
  submitted = false;

  constructor(private tutorialService: TutorialService,private router: Router) { }

  ngOnInit() {
    
  }
   
  saveAppointment() {
    const appointmentObject = {
      patientName: this.appointment.patientName,
      age: this.appointment.age,
      sex: this.appointment.sex,
      phone: this.appointment.phone,
      description: this.appointment.description,
      fromTime:this.appointment.fromTime,
      toTime:this.appointment.toTime
    };

    this.tutorialService.create(appointmentObject)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/appointments']);
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.appointment = {
      patientName: '',
      age: 0,
      sex:'',
      phone:'',
      description:'',
      fromTime:'',
      toTime:''
    };
  }

}
