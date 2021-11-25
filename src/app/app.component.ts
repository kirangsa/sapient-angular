import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name;
  user = [
    {
      firstName: 'Nissankala',
      lastName: 'Ketya',
      gender: 'Male',
      dob: 'Wed Sep 08 2021 12:52:55 GMT+0530 (India Standard Time)',
    },
    {
      firstName: 'Kiran ',
      lastName: 'Gopal',
      gender: 'Male',
      dob: 'Wed Sep 08 2021 12:52:55 GMT+0530 (India Standard Time)',
    },
  ];
}
