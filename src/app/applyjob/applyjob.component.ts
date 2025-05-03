import { Component } from '@angular/core';
import { CognizantComponent } from '../cognizant/cognizant.component';
import { RouterLink } from '@angular/router';
import { CapgeminiComponent } from '../capgemini/capgemini.component';
import { InfosysComponent } from '../infosys/infosys.component';
import { WiproComponent } from '../wipro/wipro.component';
import { TcsComponent } from '../tcs/tcs.component';
import { AccentureComponent } from '../accenture/accenture.component';

@Component({
  selector: 'app-applyjob',
  imports: [RouterLink],
  templateUrl: './applyjob.component.html',
  styleUrl: './applyjob.component.css'
})
export class ApplyjobComponent {

}
