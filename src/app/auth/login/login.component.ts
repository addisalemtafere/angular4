import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(ngForm: NgForm) {

    const email = ngForm.value.email;
    const password = ngForm.value.password;
    console.log(password);
    this.authService.signInUser(email , password);


  }

}
