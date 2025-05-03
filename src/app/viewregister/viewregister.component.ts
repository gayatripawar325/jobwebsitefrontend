import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewregister',
  imports: [CommonModule],
  templateUrl: './viewregister.component.html',
  styleUrl: './viewregister.component.css'
})
export class ViewregisterComponent implements OnInit {
  rarr:Registration[]=[]
  constructor(private rserv:RegistrationService)
  {

  }
  
ngOnInit(): void {
  this.rserv.getAll().subscribe(data=>{
    if(data.length>0)
      this.rarr=data
    
  })
}

}
