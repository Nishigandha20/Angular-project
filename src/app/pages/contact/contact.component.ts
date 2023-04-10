import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private router:Router){}
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    mobileno: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  });

  userLogin() {
    console.log(this.loginForm.value);
  }
  get username(){
    return this.loginForm.get('username')
  }

  get email(){
    return this.loginForm.get('email')
  }

  get mobileno(){
    return this.loginForm.get('mobileno')
  }

  downloadForm(){

  }
  onSubmit(){
    this.router.navigate(['/successpage']);
  }
}
