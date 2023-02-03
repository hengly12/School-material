import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import * as AOS from 'aos';

@Component({
  selector: 'app-courzees',
  templateUrl: './courzees.component.html',
  styleUrls: ['./courzees.component.scss']
})
export class CourzeesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {
    AOS.init()
  }
  isBox:boolean = false;
  openBox(){
    this.isBox = !this.isBox;
  }

  isBox1:boolean = false;
  openBox1(){
    this.isBox1 = !this.isBox1;
  }

  isBox2:boolean = false;
  openBox2(){
    this.isBox2 = !this.isBox2;
  }


}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

}
