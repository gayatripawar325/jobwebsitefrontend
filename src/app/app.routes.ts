import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomejComponent } from './homej/homej.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { LogoutComponent } from './logout/logout.component';
import { CognizantComponent } from './cognizant/cognizant.component';
import { CapgeminiComponent } from './capgemini/capgemini.component';
import { InfosysComponent } from './infosys/infosys.component';
import { WiproComponent } from './wipro/wipro.component';
import { TcsComponent } from './tcs/tcs.component';
import { AccentureComponent } from './accenture/accenture.component';
import { TestComponentRenderer } from '@angular/core/testing';

import { UploadComponent } from './upload/upload.component';
import { HomeaComponent } from './homea/homea.component';
import { ManagejobComponent } from './managejob/managejob.component';

import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { ViewregisterComponent } from './viewregister/viewregister.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { ViewresumeComponent } from './viewresume/viewresume.component';
import { AiComponent } from './ai/ai.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'sign',component:SignComponent},
    {path:'user',component:UserComponent},
    {path:'admin',component:AdminComponent},
    {path:'vres',component:ViewresumeComponent},
    {path:'homej',component:HomejComponent},
    {path:'vreg',component:ViewregisterComponent},
    {path:'vpro',component:ViewuserComponent},
    {path:'profile',component:ProfileComponent},
    {path:'applyjob',component:ApplyjobComponent},
    {path:'logout',component:LogoutComponent},
    {path:'cognizant',component:CognizantComponent},
    {path:'capgemini',component:CapgeminiComponent},
    {path:'infosys',component:InfosysComponent},
    {path:'wipro',component:WiproComponent},
    {path:'tcs',component:TcsComponent},
    {path:'accenture',component:AccentureComponent},
    {path:'upload',component:UploadComponent},
    {path:'homea',component:HomeaComponent},
    {path:'managejob',component:ManagejobComponent},
    {path:'viewapplication',component:ViewapplicationComponent},
    {path:'vcot',component:ViewcontactComponent},
    {path:'vcot',component:AiComponent},
    
    
    

    
    
    

];
