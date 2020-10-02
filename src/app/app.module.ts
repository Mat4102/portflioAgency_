import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeLadureeComponent } from './home-laduree/home-laduree.component';
import { HomeEssilorComponent } from './home-essilor/home-essilor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { HomeAgencyComponent } from './agency/home-agency/home-agency.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLadureeComponent,
    HomeEssilorComponent,
    HomeAgencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   AngularMaterialModule


  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
