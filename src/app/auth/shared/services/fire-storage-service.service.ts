import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})

export class FireStorageService {
 constructor(
    private storage: AngularFireStorage
 ){

 }   
 
 uploadSelectedFile(file: any, filePath: any) {
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    return task
  }
}