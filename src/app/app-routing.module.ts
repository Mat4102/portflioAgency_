import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeLadureeComponent} from './home-laduree/home-laduree.component';
import { HomeAgencyComponent } from './agency/home-agency/home-agency.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'homeLaduree', component: HomeLadureeComponent },
  { path: 'home/homeAgency', component: HomeAgencyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
