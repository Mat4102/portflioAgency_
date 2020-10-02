import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeLadureeComponent} from './home-laduree/home-laduree.component';
import {HomeEssilorComponent} from './home-essilor/home-essilor.component';
import {HomePatriciaComponent} from './home-patricia/home-patricia.component';
import {HomeOrangeComponent} from './home-orange/home-orange.component';
import {HomeTotalComponent} from './home-total/home-total.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'home/homeLaduree', component: HomeLadureeComponent },
  { path: 'home/homeEssilor', component: HomeEssilorComponent },
  {path: 'home/homePatricia', component: HomePatriciaComponent},
  {path: 'home/homeOrange', component: HomeOrangeComponent},
  {path: 'home/homeTotal', component: HomeTotalComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
