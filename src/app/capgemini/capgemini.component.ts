import { Component, OnInit } from '@angular/core';
import { DatascienceComponent } from '../datascience/datascience.component';
import { GraphicComponent } from '../graphic/graphic.component';
import { UiuxComponent } from '../uiux/uiux.component';
import { RouterLink } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/admin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capgemini',
  imports: [RouterLink,CommonModule],
  templateUrl: './capgemini.component.html',
  styleUrl: './capgemini.component.css'
})
export class CapgeminiComponent implements OnInit {
  ads:Admin[]=[]
  constructor(private adserve:AdminService)
  {
  
  }
  ngOnInit(): void {
    this.adserve.getAllcompany('capgemini').subscribe(data=>{
      if(data!=null)
        {
  this.ads=data
        }
      
    })
  }
}
