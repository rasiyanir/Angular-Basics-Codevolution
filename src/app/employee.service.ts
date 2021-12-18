import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(this.errorHandler)
    );
  }

  // getEmployees(){
  //   return [
  //     {"id": 1, "name": "Andrew", "age": 30},
  //     {"id": 2, "name": "Brandon", "age": 25},
  //     {"id": 3, "name": "Christina", "age": 26},
  //     {"id": 4, "name": "Elena", "age": 28},
  //   ]
  // }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }
}
