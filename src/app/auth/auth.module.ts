import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsComponent } from './components/components.component';
import { AppComponent } from '../app.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [

    AppComponent,


    // ComponentsComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SwiperModule,
  ]
})
export class AuthModule { }
