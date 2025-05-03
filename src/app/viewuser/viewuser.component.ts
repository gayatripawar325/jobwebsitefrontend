import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-viewuser',
  imports: [CommonModule],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent implements OnInit {
  prrr:Profile[]=[]
  
  constructor(private rserv:ProfileService)
  {

  }
  
ngOnInit(): void {
  this.rserv.getAll().subscribe(data=>{
    if(data.length>0)
      this.prrr=data
    
  })
}

}

