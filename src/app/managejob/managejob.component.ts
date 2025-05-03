import { Component } from '@angular/core';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-managejob',
  imports: [FormsModule,CommonModule],
  templateUrl: './managejob.component.html',
  styleUrl: './managejob.component.css'
})
export class ManagejobComponent {
  a:Admin=new Admin()
  constructor(private as:AdminService)
  {

  }
  submitdata()
  {
    this.as.register(this.a).subscribe((data)=>{
     if(data!=null)
    alert("job post successfull")
    })
  }

}
