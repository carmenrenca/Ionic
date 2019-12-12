import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
user:User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    const user= await this.authSvc.onRegister(this.user).then(res=>{
      console.log("El usuario se ha creado");
      this.router.navigateByUrl('/home');
    }).catch(err=>alert('No cumple con la condición'));
  
  }
}
