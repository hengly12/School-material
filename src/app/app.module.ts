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
import { BottomSheetOverviewCSS, BottomSheetOverviewExampleSheet, BottomSheetOverviewJava, BottomSheetOverviewPhp, CategoryComponent } from './auth/components/category/category.component';
import { PricingComponent } from './auth/components/pricing/pricing.component';
import { TestimonialComponent } from './auth/components/testimonial/testimonial.component';
import { FooterComponent } from './auth/components/footer/footer.component';
import { ComponentsComponent } from './auth/components/components.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from './auth/components/profile/profile.component';
import { HomeComponent } from './auth/components/home/home.component';
import { TeacherComponent } from './auth/components/teacher/teacher.component';
import { ClassesComponent } from './auth/components/classes/classes.component';
import { ContactComponent } from './auth/components/contact/contact.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import { MaterialModule } from './auth/shared/meterial.module';
import { VideoComponent } from './auth/components/video/video.component';
import { LessonComponent } from './auth/components/lesson/lesson.component';
import { ScheduleComponent } from './auth/components/schedule/schedule.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MaterialModule } from './auth/shared/materials.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HtmlComponent } from './auth/components/html/html.component';
import { CssComponent } from './auth/components/css/css.component';
import { PhpComponent } from './auth/components/php/php.component';
import { JavaComponent } from './auth/components/java/java.component';
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
      EditProfileComponent,
      HomeComponent,
      TeacherComponent,
      ClassesComponent,
      ContactComponent,
      VideoComponent,
      LessonComponent,
      ScheduleComponent,
      BottomSheetOverviewExampleSheet,
      BottomSheetOverviewCSS,
      BottomSheetOverviewJava,
      BottomSheetOverviewPhp,
      HtmlComponent,
      CssComponent,
      PhpComponent,
      JavaComponent,


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
        AngularFireAuthModule,
        AngularFireModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AuthModule,
        RouterModule,
        MaterialModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
    ]
})
export class AppModule { }
