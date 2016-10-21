import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { VehiculeDetailComponent } from './vehicule-detail.component';
import { VehiculeComponent } from './vehicule.component';
import { VehiculeService } from './vehicule.service';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
    { path: 'vehicules', component: VehiculeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: VehiculeDetailComponent }
  ])
    ],
  declarations:[ 
    AppComponent, 
    VehiculeDetailComponent,
    VehiculeComponent,
    DashboardComponent
    ],
  providers: [ VehiculeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
