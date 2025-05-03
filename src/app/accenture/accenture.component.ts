import { Component, OnInit } from '@angular/core';
import { CloudComponent } from '../cloud/cloud.component';
import { AiComponent } from '../ai/ai.component';
import { MachineComponent } from '../machine/machine.component';
import { RouterLink } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/admin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accenture',
  imports: [RouterLink,CommonModule],
  templateUrl: './accenture.component.html',
  styleUrl: './accenture.component.css'
})
export class AccentureComponent implements OnInit {
  ads:Admin[]=[]
  constructor(private adserve:AdminService)
  {
  
  }
  ngOnInit(): void {
    this.adserve.getAllcompany('accenture').subscribe(data=>{
      if(data!=null)
        {
  this.ads=data
        }
      
    })
  }
}