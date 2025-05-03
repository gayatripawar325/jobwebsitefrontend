import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  c:Contact=new Contact()
    constructor(private cs:ContactService)
    {
  
    }
    submitdata()
    {
      this.cs.register(this.c).subscribe((data)=>{
       if(data!=null)
      alert("messages sending successfull")
      })
    }

}
