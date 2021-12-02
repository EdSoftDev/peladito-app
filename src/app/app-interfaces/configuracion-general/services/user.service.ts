import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private server:string = 'http://localhost:8080/api/'
  private urlEndPoint:string = this.server + 'users';

  constructor(
    private http:HttpClient
  ) { }

  getUsers() {
    return this.http.get<User[]>(this.urlEndPoint);
  }

  createUser(user: User) {
    return this.http.post(this.urlEndPoint, user);
  }

  editUser(user: User) {
    return this.http.put(`${this.urlEndPoint}/${user.id}`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.urlEndPoint}/${id}`);
  }
}
