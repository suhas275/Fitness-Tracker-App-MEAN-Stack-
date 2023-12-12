import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // GetallnewUser() {
  //   throw new Error('Method not implemented.');
  // }

  // userDetails(formData: any) {
  //   throw new Error('Method not implemented.');
  // }

  // addUsers(formData: any) {
  //   throw new Error('Method not implemented.');
  // }

  private baseUrl: string = "http://localhost:3000/registered"
  constructor(private http: HttpClient) { }

  postRegistration(registerObj: User) {
    return this.http.post<User>(`http://localhost:3000/registered`, registerObj)
  }

  getRegisteredUser() {
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  // updateRegisterUser(registerObj: User, id: number) {
  //   return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj)
  // }
 
  deleteRegistered(id: string) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisteredUserId(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

}

