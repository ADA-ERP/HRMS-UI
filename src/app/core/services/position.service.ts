import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grade } from '../models/grade';
import { Position } from '../models/position';
import { SalaryStructure } from '../models/salaryStructure';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  
 


  baseUrl = environment.apiHost
  constructor(private http: HttpClient) { }

  //#region Job Grade
  getGrade(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.baseUrl}Grade`);
  }
  getGradeById(id: number): Observable<Grade> {
    return this.http.get<Grade>(`${this.baseUrl}Grade/${id}`);

  }
  AddGrade(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(`${this.baseUrl}Grade`, grade);
  }

  updateGrade(id: number, grade: Grade): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}Grade/${id}`, grade);
  }

  deleteGrade(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}Grade/${id}`);
  }
  //#endregion

  //#region position
  getPosition(id: number):Observable<Position> {
    return this.http.get<Position>(`${this.baseUrl}Position/${id}`);
  }
  getPositions():Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}Position`);
  }

  getPositionBy(gradeId: number):Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}Position/Grade/${gradeId}`);
  }

  addPosition(gradeId: number,position:Position):Observable<Position> {
    return this.http.post<Position>(`${this.baseUrl}Position/Grade/${gradeId}`,position);
  }

  updatePosition(gradeId: number,position:Position):Observable<Position> {
    return this.http.post<Position>(`${this.baseUrl}Position/Grade/${gradeId}`,position);
  }

  deletePosition(id: number):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}Position/${id}`);
  }
  //#endregion
  //#region Salary Structure
  getSalaryStructure(): Observable<SalaryStructure[]> {
    return this.http.get<SalaryStructure[]>(`${this.baseUrl}SalaryStructure`);
  }

  getSalaryStructureById(strId: number): Observable<SalaryStructure> {
    return this.http.get<SalaryStructure>(`${this.baseUrl}SalaryStructure/${strId}`);
  }

  createSalaryStructure(salaryStructure: SalaryStructure): Observable<SalaryStructure> {
    return this.http.post<SalaryStructure>(`${this.baseUrl}SalaryStructure`, salaryStructure);
  }

  updateSalaryStructure(strId: number, salaryStructure: SalaryStructure): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}SalaryStructure/${strId}`, salaryStructure);
  }

  deleteSalaryStructure(strId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}SalaryStructure/${strId}`);
  }

  //#endregion



}
