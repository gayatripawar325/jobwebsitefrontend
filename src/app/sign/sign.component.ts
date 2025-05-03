





import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-sign',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  r:Registration=new Registration()
  constructor(private rs:RegistrationService)
  {

  }
  submitdata(regForm:any) {
    if (!regForm.valid) {
    alert("Invalid data")
      }
     else {
      this.rs.register(this.r).subscribe((data) => {
        if (data != null)
          alert("registration successful");
      });
    }
  }
}



















