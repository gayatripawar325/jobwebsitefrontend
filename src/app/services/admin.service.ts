import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverurl="http://localhost:9000/admin"
  constructor(private http:HttpClient) { }
  getAll():Observable<Admin[]>
  {
    return this.http.get<Admin[]>(this.serverurl)
  }
  getAllcompany(cnm:any):Observable<Admin[]>
  {
    return this.http.get<Admin[]>("http://localhost:9000/companywise/"+cnm)
  }
  register(a:Admin):Observable<Admin>
  {
    return this.http.post<Admin>(this.serverurl,a)
  }
  search(i:any):Observable<Admin>
  {
    return this.http.get<Admin>(this.serverurl+"/"+i)
  }
  del(i:any):Observable<any>
{
  return this.http.delete(this.serverurl+"/"+i)
}
update(i:any,a:Admin):Observable<Admin>
{
  return this.http.put<Admin>(this.serverurl+"/"+i,a)
}

  
}
