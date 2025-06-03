import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModal } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  userSrv = inject(UserService)
  constructor(private http: HttpClient) { }
  getSitesByClientId(): Observable<ResponseModal> {

    const clientId = this.userSrv.loggedInData.extraId +2
    return this.http.get<ResponseModal>("https://api.freeprojectapi.com/api/SmartParking/GetAllSites?clientid="+clientId)
  }
}
