import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl(''),
    });
  constructor(private auth : AngularFireAuthModule,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register(f: any){
    const {email} = f;
    console.log('f');
  }
}
