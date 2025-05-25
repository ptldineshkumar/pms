import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModal, User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInData!: IUserModal
  constructor(private http: HttpClient) {
    const userdata = localStorage.getItem('logindata')
    if (userdata != null) {
      this.loggedInData = JSON.parse(userdata)
    }
  }

  loginUser(obj: User): Observable<IUserModal> {
    console.log("obj ", obj);

    return this.http.post<IUserModal>('https://api.freeprojectapi.com/api/SmartParking/login', obj);
  }

} 
