import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent } from './landing-page/landing-page.component';
import {PredefinedDirectivesComponent } from './predefined-directives/predefined-directives.component';
import {NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import {NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import {NgStyleDirectiveComponent } from './ng-style-directive/ng-style-directive.component';




const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'ngIf', component: PredefinedDirectivesComponent},
  {path: 'ngFor', component: NgForDirectiveComponent},
  {path: 'ngClass', component: NgClassDirectiveComponent},
  {path: 'ngStyle', component: NgStyleDirectiveComponent},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
