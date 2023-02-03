import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { ComponentsComponent } from './components/components.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { OnlineClassComponent } from './components/online-class/online-class.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'components', component : ComponentsComponent},
  {path: 'profile', component : ProfileComponent},
  {path: 'home', component : HomeComponent},
  {path: 'teacher', component : TeacherComponent},
  {path: 'classes', component : ClassesComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'lesson', component : LessonComponent},
  {path: 'schedule', component : ScheduleComponent},
  {path: 'online-class', component : OnlineClassComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
