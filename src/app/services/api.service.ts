import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl?: string;
  baseUrl:string = "http://localhost/parking-project1/database";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username:string, password:string) {
  alert(username)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
  .pipe(map(Users => {
  this.setToken(Users[0].name);
  this.getLoggedInName.emit(true);
  return Users;
  }));
  }
  
  public userregistration(email:string,username:string,firstName:string,lastName:string,plateNumber:string,password:string) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { email,username,firstName,lastName,plateNumber,password })
  .pipe(map(Users => {
  return Users;
  }));
  }
  
  //token
  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
}
