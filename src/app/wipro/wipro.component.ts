import { Component, OnInit } from '@angular/core';
import { DevopsComponent } from '../devops/devops.component';
import { CyberComponent } from '../cyber/cyber.component';
import { MernComponent } from '../mern/mern.component';
import { RouterLink } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/admin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wipro',
  imports: [RouterLink,CommonModule],
  templateUrl: './wipro.component.html',
  styleUrl: './wipro.component.css'
})
export class WiproComponent implements OnInit {
  ads:Admin[]=[]
  constructor(private adserve:AdminService)
  {
  
  }
  ngOnInit(): void {
    this.adserve.getAllcompany('wipro').subscribe(data=>{
      if(data!=null)
        {
  this.ads=data
        }
      
    })
  }
}
