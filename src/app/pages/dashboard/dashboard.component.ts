import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ISite, ResponseModal } from '../../model/user.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  masterSrv = inject(MasterService)
  siteList: ISite[]=[]
  ngOnInit(): void {
 this.getSites() 
  }
  getSites() {
    this.masterSrv.getSitesByClientId().subscribe((res: ResponseModal) => {
console.log(res.data);

      
  this.siteList=res.data

    })
  }
}
