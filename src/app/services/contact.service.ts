import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  serverurl="http://localhost:9000/contact"
  constructor(private http:HttpClient) { }
  getAll():Observable<Contact[]>
  {
    return this.http.get<Contact[]>(this.serverurl)
  }
  register(c:Contact):Observable<Contact>
  {
    return this.http.post<Contact>(this.serverurl,c)
  }
  search(i:any):Observable<Contact>
  {
    return this.http.get<Contact>(this.serverurl+"/"+i)
  }
  del(i:any):Observable<any>
{
  return this.http.delete(this.serverurl+"/"+i)
}
update(i:any,c:Contact):Observable<Contact>
{
  return this.http.put<Contact>(this.serverurl+"/"+i,c)
}

  
}
