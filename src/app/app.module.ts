import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { NavbarComponent } from './auth/components/navbar/navbar.component';
import { ImproveComponent } from './auth/components/improve/improve.component';
import { CourzeesComponent } from './auth/components/courzees/courzees.component';
import { TopCoursesComponent } from './auth/components/top-courses/top-courses.component';
import { CategoryComponent } from './auth/components/category/category.component';
import { PricingComponent } from './auth/components/pricing/pricing.component';
import { TestimonialComponent } from './auth/components/testimonial/testimonial.component';
import { FooterComponent } from './auth/components/footer/footer.component';
import { ComponentsComponent } from './auth/components/components.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
    declarations: [
      SignupComponent,
      NavbarComponent,
    ImproveComponent,
    CourzeesComponent,
    TopCoursesComponent,
    CategoryComponent,
    PricingComponent,
    TestimonialComponent,
    FooterComponent,
    ComponentsComponent,
    LoginComponent,




    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SwiperModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
    ]
})
export class AppModule { }
