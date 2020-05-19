import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent } from './landing-page/landing-page.component';
import {PredefinedDirectivesComponent } from './predefined-directives/predefined-directives.component';
import {NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import {NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import {NgStyleDirectiveComponent } from './ng-style-directive/ng-style-directive.component';
import {InterpolationComponent } from './interpolation/interpolation.component';
import {PropertyBindingComponent } from './property-binding/property-binding.component';
import {EventBindingComponent } from './event-binding/event-binding.component';






const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'ngIf', component: PredefinedDirectivesComponent},
  {path: 'ngFor', component: NgForDirectiveComponent},
  {path: 'ngClass', component: NgClassDirectiveComponent},
  {path: 'ngStyle', component: NgStyleDirectiveComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propertyBinding', component: PropertyBindingComponent},
  {path: 'eventBinding', component: EventBindingComponent},






  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
