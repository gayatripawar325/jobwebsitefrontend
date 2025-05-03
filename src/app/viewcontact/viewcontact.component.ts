import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewcontact',
  imports: [CommonModule],
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewcontactComponent implements OnInit {
  crrr:Contact[]=[]
  
  constructor(private rserv:ContactService)
  {

  }
  
ngOnInit(): void {
  this.rserv.getAll().subscribe(data=>{
    if(data.length>0)
      this.crrr=data
    
  })
}

}

