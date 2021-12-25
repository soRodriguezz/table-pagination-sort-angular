import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor( private http: HttpClient ) { }

  personas(  ): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page');
  }

}
