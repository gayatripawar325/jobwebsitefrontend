import { Component, OnInit } from '@angular/core';
import { DataanalystComponent } from '../dataanalyst/dataanalyst.component';
import { AndroidComponent } from '../android/android.component';
import { FullstackComponent } from '../fullstack/fullstack.component';
import { RouterLink } from '@angular/router';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infosys',
  imports: [RouterLink,CommonModule],
  templateUrl: './infosys.component.html',
  styleUrl: './infosys.component.css'
})
export class InfosysComponent implements OnInit {
  ads:Admin[]=[]
  constructor(private adserve:AdminService)
  {
  
  }
  ngOnInit(): void {
    this.adserve.getAllcompany('infosys').subscribe(data=>{
      if(data!=null)
        {
  this.ads=data
        }
      
    })
  }
}