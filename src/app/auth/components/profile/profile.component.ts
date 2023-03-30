// import { GENDER } from './../../../dummy/country';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { STATUS, GENDER } from 'src/app/dummy/country';
import { PROVINCE } from 'src/app/dummy/country';
import { AuthService } from '../../shared/auth.service';
import {Observable} from 'rxjs';

import {endWith, map, startWith} from 'rxjs/operators';
import { FireStorageService } from '../../shared/services/fire-storage-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  uid: string = '';
  dataUser: any = null;
  STATUS = STATUS;
  GENDER = GENDER;
  PROVINCE = PROVINCE;

  /////uploade/////
  message: string='';
  preview: string='';
  progress: number=0;
  selectedFiles: any[]=[];
  upload = true;
  uploaded = false;
  currentFile: File | undefined;
  $events: any;
  START_UPLOAD: boolean=false;
  uploadPercent?: any;

  loading:boolean= false;

  profileForm = new FormGroup({
    last_name: new FormControl(''),
    first_name: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl(''),
    province: new FormControl(''),
    birthday: new FormControl(''),
    hometown: new FormControl(''),
    phone: new FormControl(''),
    nameof:new FormControl(''),
    relationship: new FormControl(''),
    });

  inputFile: any;

  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private as: AuthService,
    private storage: FireStorageService,
    private router : Router,
  ) {
  }

  ngOnInit(): void {

 ////////////////////////////////////submit //////////////////////////////////////
    this.fireauth.authState.subscribe( user => {

      if(user){
        this.uid = user?.uid;
      }

    this.afs.collection("user").doc(this.uid).valueChanges().subscribe(res => {

      this.dataUser = res;

      console.log('data', this.dataUser);

      if(this.dataUser){

        // const key: any = this.afs.createId();

        this.profileForm.patchValue({
          last_name: this.dataUser?.last_name || null,
          first_name: this.dataUser?.first_name || null,
          status: this.dataUser?.status ? this.dataUser?.status : this.STATUS[0],
          province: this.dataUser?.province? this.dataUser?.province : this.PROVINCE[0],
          gender: this.dataUser?.gender ? this.dataUser?.gender : this.GENDER[0],
          birthday: this.dataUser?.bd ? this.dataUser?.bd?.toDate() : null,
          hometown: this.dataUser?.hometown ? this.dataUser?.hometown : this.STATUS[0],
          phone: this.dataUser?.phone || null,
          nameof:this.dataUser?.nameof || null,
          relationship:this.dataUser?.relationship || null,
        })

        console.log('this.profileForm', this.profileForm);


        const item = this.profileForm;

      }
    })

    })

  }

  compareWithFn(item1: any, item2: any) {
    return item1 && item2 ? item1.key === item2.key : item1 === item2;
  }

  onChangeCountry(event: any){
    console.log('evento', event?.target?.value);

  }

  async onSave(f: any){
    this.loading=true;
    const key = this.afs.createId();
    const data = {
      key: this.dataUser?.key ? this.dataUser?.key : key,
      create_at: this.dataUser?.create_at ? this.dataUser?.create_at : new Date(),
      files: this.dataUser?.files ? this.dataUser?.files : null,
      ...f
    }
    console.log('onsave');

    const selectedCoverFiles:any[]=[];


    if (this.selectedFiles.length > 0) {
      for (let index = 0; index < this.selectedFiles.length; index++) {
        this.START_UPLOAD = true;
        const file = this.selectedFiles[index];
        const soundPath = `/FILES/${key}_${file.name}`;
        const soundTask = this.storage.uploadSelectedFile(file, soundPath);

        this.uploadPercent = soundTask.percentageChanges();
        const downloadURL: any = (await soundTask.then(async (f) => {
          return f.ref.getDownloadURL()
        }));


        let fileType = file.type.split('/').slice(0, -1).join('/');
        const imf ={
          phone: file.phone,
          nameof: file.nameof,
          relationship: file.relationship,
        }
        const files = {
          key: this.afs.createId(),
          filename: soundPath,
          name: file.name,
          downloadUrl: downloadURL,
          fileType: file.type,
          type: fileType,
          fileSize: file.size,
        }

        // this.afs.collection("user").doc().set(imf, {merge: true})
        selectedCoverFiles.push(files)
        this.START_UPLOAD = false;
      }
      data.files = selectedCoverFiles[0];

    }
    this.loading=false;
    this.as.updateUser(data)
    this.router.navigate(['/home/profile']);
    alert("Your profile was updated '3'")
  }

  saveImf(user: any){
    const imf ={
      phone: user.phone,
      nameof: user.nameof,
      relationship: user.relationship,
    }
    this.afs.collection("user").doc(user.key).set(imf, {merge: true})
  }


////////////////////////////////////upload image //////////////////////////////////////

selectFile(event: any): void {

  this.message = '';
  this.preview = '';
  this.progress = 0;
  this.selectedFiles = event?.target?.files;


  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles[0];



    if (file) {
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.preview = e.target.result;
        if (this.preview != '') {
          this.upload = false;
          this.uploaded = true;
        }
      };

      reader.readAsDataURL(this.currentFile);


    }
  }

}

displaywith(o1: any, o2: any){
  if(o1 && o2){
    return
  }
}
}

