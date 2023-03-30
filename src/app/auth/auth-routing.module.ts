import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { ComponentsComponent } from './components/components.component';
import { ContactComponent } from './components/contact/contact.component';
import { CssComponent } from './components/css/css.component';
import { HomeComponent } from './components/home/home.component';
import { HtmlComponent } from './components/html/html.component';
import { JavaComponent } from './components/java/java.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { PhpComponent } from './components/php/php.component';
import { EditProfileComponent } from './components/profile/profile.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { VideoComponent } from './components/video/video.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'components', component : ComponentsComponent},
  {path: 'editprofile', component : EditProfileComponent},
  {path: 'home', component : HomeComponent},
  {path: 'teacher', component : TeacherComponent},
  {path: 'classes', component : ClassesComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'lesson', component : LessonComponent},
  {path: 'schedule', component : ScheduleComponent},
  {path: 'video', component : VideoComponent},
  {path: 'html', component : HtmlComponent},
  {path: 'css', component : CssComponent},
  {path: 'java', component : JavaComponent},
  {path: 'php', component : PhpComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
