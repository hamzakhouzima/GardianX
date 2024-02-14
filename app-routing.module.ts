import {inject, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Guards/AuthGuard';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./home/home.component";
// import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [() => inject(AuthGuard).canActivate()] },

  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

// component: HomeComponent,
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
