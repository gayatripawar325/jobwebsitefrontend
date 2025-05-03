import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  serverurl="http://localhost:9000/profile"


  constructor(private http:HttpClient) { }
  getAll():Observable<Profile[]>
  {
    return this.http.get<Profile[]>(this.serverurl)
  }
  register(p:Profile):Observable<Profile>
  {
    return this.http.post<Profile>(this.serverurl,p)
  }
  search(i:any):Observable<Profile>
  {
    return this.http.get<Profile>(this.serverurl+"/"+i)
  }
  del(i:any):Observable<any>
{
  return this.http.delete(this.serverurl+"/"+i)
}
update(i:any,p:Profile):Observable<Profile>
{
  return this.http.put<Profile>(this.serverurl+"/"+i,p)
}

  

  
}
