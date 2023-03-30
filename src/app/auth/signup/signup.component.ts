import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  phone:string ='';
  nameof:string = '';
  relationship:string='';

  profileForm = new FormGroup({
    last_name: new FormControl(''),
    first_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    Repassword: new FormControl(''),
    checkbox: new FormControl(''),
    });


  constructor(
    private auth : AuthService,
    private fb: FormBuilder)
  { }

  ngOnInit(): void {
  }

  register(f: any){
    const {email, password, Repassword, checkbox} = f;

    if (email == '') {
      alert('!Please, Enter email.');
      return;
    }

    if (password == '') {
      alert('!Please, Enter password.');
      return;
    }

    if(password !== Repassword){
      alert('!Please, Enter the same password.');
    }

    if(checkbox == false){
      alert('!Please, Click on checkbox.');
    }

    this.auth.register(email, password, Repassword, checkbox, f);
    // this.email ='';
    // this.password ='';
    // this.profileForm.reset()

  }
/////
  showPassword = false;

  toggleShow(){
    this.showPassword = !this.showPassword
  }
  ////
  showPassword1 = false;

  toggleShow1(){
    this.showPassword1 = !this.showPassword1
  }

}
