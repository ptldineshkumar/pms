import { Component, inject } from '@angular/core';
import { IUserModal, User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginObj:User= new User();
router=inject(Router)
userservice=inject(UserService);


onLogin(){
this.userservice.loginUser(this.loginObj).subscribe((data:IUserModal)=>{
//alert("Valid credentials");
localStorage.setItem("logindata",JSON.stringify(data))
this.router.navigateByUrl('/dashboard')
},error=>{
 this.router.navigateByUrl('')
})
}
}