import { Component } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { Router, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Resume } from '../models/resume';
import { FormsModule } from '@angular/forms';
import { FileHandle } from '../models/file-handle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  imports:[FormsModule,CommonModule,RouterLink]
})
export class UploadComponent {
  resume: Resume=new Resume();
  submitted=false;
  errordata="";
  constructor(private resumeService:ResumeService,private router:Router,private sanitizer:DomSanitizer){}
    
   ngOnInit()
   {

   }
   newResume():void {
    this.submitted=false;
    this.resume=new Resume();
   }  

   save() {

    const formData=this.prepareFormData(this.resume);
    this.resumeService.createResume(formData).subscribe((data) =>{
      if(data!=null)
      {
        alert("resume upload successfully")
      }

      
      console.log(data)
      this.gotoList();
    },
        error =>{ console.log(error);
    this.errordata=error;
    
    } )
   }
  
   
   prepareFormData(resume:Resume):FormData {
    const formData = new FormData();
    formData.append(
      'resume',
      new Blob([JSON.stringify(resume)],{type:"application/json"})
    );

  
  
    for (var i = 0; i < resume.resumeImages.length; i++) {
      formData.append(
        'imageFile',
         resume.resumeImages[i].file,
         resume.resumeImages[i].file.name
        );
    
  }
  return formData;
}
   
  
    removeImage(i:number)
    {
      this.resume.resumeImages.splice(i,1)
    }
    onFileSelected(event:any){
      
      if(event.target.files)
      {
    const file=event.target.files[0];
    const fileHandle:FileHandle={
      file:file,
      url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
      name:file.name
    }
    this.resume.resumeImages.push(fileHandle)
      }
    }
     onSubmit() {
      this.save();
      this.submitted = true;
      console.log("inside on submit")
    }

    gotoList() {
      this.router.navigate(['/']);
    }
    

   }





