import { Component, OnInit } from '@angular/core';
import { AngularComponent } from '../angular/angular.component';
import { TesterComponent } from '../tester/tester.component';
import { NodejsComponent } from '../nodejs/nodejs.component';
import { RouterLink } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/admin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tcs',
  imports: [RouterLink,CommonModule],
  templateUrl: './tcs.component.html',
  styleUrl: './tcs.component.css'
})
export class TcsComponent implements OnInit {
  ads:Admin[]=[]
  constructor(private adserve:AdminService)
  {
  
  }
  ngOnInit(): void {
    this.adserve.getAllcompany('tcs').subscribe(data=>{
      if(data!=null)
        {
  this.ads=data
        }
      
    })
  }
}