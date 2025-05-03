


import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Registration } from '../models/registration';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [RouterLink,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  r:Registration=new Registration()
  constructor(private rs:RegistrationService,private router:Router)
  {

  }
  submitdata()
  {
   this.rs.login(this.r.email,this.r.password).subscribe((data)=>{
  if(data.length>0)
  {
    alert("Login successful")
    localStorage.setItem("email",this.r.email)
    this.router.navigate(['/homej'])
  }
  else
  alert("invalid email or password")

   })
  }


}



  


  