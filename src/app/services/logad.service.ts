import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logad } from '../models/logad';

@Injectable({
  providedIn: 'root'
})
export class LogadService {
  serverurl="http://localhost:9000/logad"

  constructor(private http:HttpClient) { }
 login(em:any,ps:any):Observable<Logad>
 {
   return this.http.get<Logad>(this.serverurl+"/"+em+"/"+ps)
 
 }
   


  }
