import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { Resume } from '../models/resume';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewresume',
  templateUrl: './viewresume.component.html',
  styleUrls: ['./viewresume.component.css'],
  imports:[CommonModule]
})
export class ViewresumeComponent implements OnInit {
  urrr:Resume[]=[]
   
   constructor(private rserv:ResumeService)
   {
 
   }
   
 ngOnInit(): void {
   this.rserv.getAll().subscribe(data=>{
     if(data.length>0)
       this.urrr=data
     
   })
 }
 
}
