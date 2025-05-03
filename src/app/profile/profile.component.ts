import { Component } from '@angular/core';
import { Profile } from '../models/profile';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  p:Profile=new Profile()
    constructor(private ps:ProfileService)
    {
  
    }
    submitdata()
    {
      this.ps.register(this.p).subscribe((data)=>{
       if(data!=null)
      alert(" successfully complete your profile")
      })
    }
  

}
