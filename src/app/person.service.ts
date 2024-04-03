import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Userinfo } from './userinfo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl='https://jsonplaceholder.typicode.com'
  httpClient=inject(HttpClient);
  getAllUsers():Observable<Userinfo[]>{
    return this.httpClient.get<Userinfo[]>(`${this.apiUrl}/users`);
  }
  getUserById(id:number):Observable<Userinfo|undefined>{
    return this.httpClient.get<Userinfo>(`${this.apiUrl}/users/${id}`);
  }
  constructor(private http:HttpClient) { }
}
