import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Logad } from '../models/logad';
import { LogadService } from '../services/logad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  r:Logad=new Logad()
  constructor(private rs:LogadService,private router:Router)
  {

  }
  submitdata()
  {
   this.rs.login(this.r.email,this.r.password).subscribe((data)=>{
  if(data!=null)
  {
    alert("Login successful")
    localStorage.setItem("aemail",this.r.email)
    this.router.navigate(['/homea'])
  }
  else
  alert("invalid email or password")

   })
  }


}
