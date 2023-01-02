import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './auth/components/navbar/navbar.component';
import { ComponentsComponent } from './auth/components/components.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
