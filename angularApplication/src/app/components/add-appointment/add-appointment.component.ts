import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  slotForm: FormGroup;

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

  constructor(private fb: FormBuilder,private tutorialService: TutorialService,private router: Router) { 
    
  }

  ngOnInit() {
    this.slotForm = this.fb.group({
      patientName: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],

    });
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
    if(this.slotForm.invalid){
      return;
    }
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
