import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModal, User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(obj:User):Observable<IUserModal>{
    console.log("obj ",obj);
    
    return this.http.post<IUserModal>('https://api.freeprojectapi.com/api/SmartParking/login',obj);
  }
  
} 
