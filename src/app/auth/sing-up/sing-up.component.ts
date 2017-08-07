import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  singnUp(ngForm: NgForm) {
    const email = ngForm.value.email;
    const passsword = ngForm.value.password;
    this.authService.signUpUser(email , passsword);
    console.log(passsword);
  }
}
