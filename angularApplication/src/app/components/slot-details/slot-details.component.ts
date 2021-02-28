import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-slot-details',
  templateUrl: './slot-details.component.html',
  styleUrls: ['./slot-details.component.css']
})
export class SlotDetailsComponent implements OnInit {
  currentslot = null;
  message = '';
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
  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    console.log(this.route.snapshot.paramMap.get('phone'));
    this.getAppointment(this.route.snapshot.paramMap.get('phone'));
  }

  getAppointment(phone) {
    this.tutorialService.get(phone)
      .subscribe(
        data => {
          var datePipe = new DatePipe("en-US");
          data[0].fromTime = datePipe.transform(data[0].fromTime, 'dd-MM-yyyy h:mm a');
          data[0].toTime = datePipe.transform(data[0].toTime, 'dd-MM-yyyy h:mm a');
          if(data[0].sex == 'male'){
            this.genders = [
              {
                  id: "male",
                  value: 'male'
              },
              {
                  id: "female",
                  value: 'female'
              }];
          }else{
            this.genders = [
              {
                  id: "male",
                  value: 'male'
              },
              {
                  id: "female",
                  value: 'female'
              }];
          }
          this.currentslot = data[0];
          console.log(this.currentslot);
        },
        error => {
          console.log(error);
        });
  }

 

  updateAppointment(slot) {
    this.tutorialService.update(slot.phone, slot)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/appointments']);
        },
        error => {
          console.log(error);
        });
  }

  
}
