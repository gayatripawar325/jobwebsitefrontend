import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getResumes() {
      throw new Error("Method not implemented.");
  }

  private baseurl = 'http://localhost:9000/project/resumes';

  constructor(private http: HttpClient) {}

  createResume(resume: FormData): Observable<object> {
    return this.http.post(`${this.baseurl}`, resume);
  }

  getAll(): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.baseurl}`);
  }

  deleteResume(resumeId: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${resumeId}`);
  }
}
