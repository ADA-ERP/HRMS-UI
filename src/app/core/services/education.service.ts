import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FieldOfStudy } from '../models/fieldOfStudy';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl=environment.apiHost
  constructor(private http:HttpClient) { }

  getFieldOfStudy():Observable<FieldOfStudy[]>{
    return this.http.get<FieldOfStudy[]>(`${this.baseUrl}FieldOfStudy`);
  }
}
