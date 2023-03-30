import { map } from 'rxjs/operators';
import { GENDER } from 'src/app/dummy/country';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { } from '@angular/fire/compat/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any = null;
phone:string = '';
nameof:string = '';
relationship:string = '';

  constructor(
    private fireauth : AngularFireAuth,
    private router : Router,
    private afs: AngularFirestore) { }

  //login method
  login(email : string, password : string,){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token', 'true',)
      this.router.navigate(['/components'])
    }, err => {
      alert("Something went wrong!");
      this.router.navigate(['/login']);
    })
  }

  signOut(){
    this.fireauth.signOut().then( () =>{
      // '/auth/login' ||
      this.router.navigate(['../auth'])

    }).catch(err => {
      alert("!System error." + err)
    })
  }

  //register
  register(email: string, password: string, Repassword: string, checkbox:boolean,form: any,){
    if(password === Repassword){
      if(checkbox == true){
        this.fireauth.createUserWithEmailAndPassword(email, password).then( (res) => {
          const {user} = res;
          const {first_name, last_name} = form
          if(user){
            const item = {
              email: user?.email,
              key: user?.uid,
              first_name: first_name,
              last_name: last_name,
              create_at: new Date(),
            }
          this.setUser(item)
          }
          this.router.navigate(['/components'])
        }, err =>{
          alert(err.message);
          this.router.navigate(['signup']);
        })
      }else{
        console.log('bye');
      }
    }else{
      console.log('error');

    }
  }

  setUser(user: any){
    console.log('useruser', user);
    let file = new Map().set;
    const {key, email, first_name, last_name, } = user
    const displayName = last_name + ' ' + first_name
    const item = {
      key,
      first_name: first_name? first_name: '',
      last_name: last_name ? last_name : '',
      displayName: displayName ? displayName : '',
      email: email,
      create_at: new Date(),
      phone:this.phone='',
      nameof:this.nameof='',
      relationship:this.relationship='',
      // files: file =null,
    }

    console.log('item', item);


    this.afs.collection("user").doc(item?.key).set(item, {merge: true}).then((suc)=> {
      console.log('success', suc);
    })
  }

  updateUser(item: any){
    const {last_name, first_name, email, key} = item;
    const displayName = last_name + ' ' + first_name

    this.fireauth.currentUser.then(s => {
      const currentUser: any = {
        ...s,
        displayName: displayName ? displayName : '',
        email:s?.email,
        photoURL: null,
        uid: key
      }
      const last_item = {
        key,
        first_name: first_name? first_name: '',
        last_name: last_name ? last_name : '',
        displayName: displayName ? displayName : '',
        email: s?.email,
        files: item?.files,
        gender: item.gender,
        bd: item.birthday,
        hometown: item.hometown,
        status: item.status,
        phone: item.phone,
        nameof: item.nameof,
        relationship: item.relationship,

      }
      console.log('currentUser', currentUser);

      this.fireauth.updateCurrentUser(currentUser).then(res => {
        console.log('success1', res);
        this.afs.collection("user").doc(last_item?.key).set(last_item, {merge: true}).then((suc)=> {
          console.log('success2', suc);
        })

      }).catch(error => {
        console.log(error);

      })
    })

    // this.fireauth.updateCurrentUser(email).then( (res) => {

    //   alert('Register successful')

    //   const {user} = res;
    //   const {first_name, last_name} = form
    //   if(user){
    //     const item = {
    //       email: user?.email,
    //       key: user?.uid,
    //       first_name: first_name,
    //       last_name: last_name
    //     }
    //   this.setUser(item)
    //   }
    //   this.router.navigate(['/home'])
    // }, err =>{
    //   alert(err.message);
    //   this.router.navigate(['signup']);
    // })
  }
}
