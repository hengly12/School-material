import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsComponent } from './components/components.component';
import { AppComponent } from '../app.component';

import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { BottomSheetOverviewExampleSheet } from './components/category/category.component';


@NgModule({
  declarations: [

    AppComponent,


    // ComponentsComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SwiperModule,
    FormsModule,
  ]
})
export class AuthModule { }
