import { Component } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';
import { CognizantComponent } from '../cognizant/cognizant.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web',
  imports: [RouterLink],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {

}
