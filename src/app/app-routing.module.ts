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
import {TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {PipesComponent} from './pipes/pipes.component';
import {EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HostListenerComponent } from './host-listener/host-listener.component';
import {ContentProjectionComponent } from './content-projection/content-projection.component';
import {ContainerComponent } from './container/container.component';
import {TemplateComponent } from './template/template.component';













const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'ngIf', component: PredefinedDirectivesComponent},
  {path: 'ngFor', component: NgForDirectiveComponent},
  {path: 'ngClass', component: NgClassDirectiveComponent},
  {path: 'ngStyle', component: NgStyleDirectiveComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propertyBinding', component: PropertyBindingComponent},
  {path: 'eventBinding', component: EventBindingComponent},
  {path: 'twoWayBinding', component: TwoWayBindingComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'empDetails', component: EmployeeDetailsComponent},
  {path: 'hostListener', component: HostListenerComponent},
  {path: 'contentProjection', component: ContentProjectionComponent},
  {path: 'container', component: ContainerComponent},
  {path: 'template', component: TemplateComponent},




  











  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
