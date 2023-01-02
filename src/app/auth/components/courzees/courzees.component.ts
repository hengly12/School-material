import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-courzees',
  templateUrl: './courzees.component.html',
  styleUrls: ['./courzees.component.scss']
})
export class CourzeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
