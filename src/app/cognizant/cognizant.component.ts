import { Component, OnInit } from '@angular/core';
import { WebComponent } from '../web/web.component';
import { RouterLink } from '@angular/router';
import { SoftwareComponent } from '../software/software.component';
import { PythonComponent } from '../python/python.component';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cognizant',
  imports: [RouterLink,CommonModule],
  templateUrl: './cognizant.component.html',
  styleUrl: './cognizant.component.css'
})
export class CognizantComponent implements OnInit {
  ads:Admin[]=[]
  constructor(private adserve:AdminService)
  {
  
  }
  ngOnInit(): void {
    this.adserve.getAllcompany('cognizant').subscribe(data=>{
      if(data!=null)
        {
  this.ads=data
        }
      
    })
  }
}