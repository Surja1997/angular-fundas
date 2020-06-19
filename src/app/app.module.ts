import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredefinedDirectivesComponent } from './predefined-directives/predefined-directives.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import { NgStyleDirectiveComponent } from './ng-style-directive/ng-style-directive.component';
import { FormsModule } from '@angular/forms';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import {ExponentialStrengthPipe} from './pipes/exponential-strength.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { EmployeeService } from './services/employee.service';
import { TextModifyDirective } from './text-modify.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { HostListenDirective } from './host-listen.directive';
import { HostBindDirective } from './host-bind.directive';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { TemplateComponent } from './template/template.component';
@NgModule({
  declarations: [
    AppComponent,
    PredefinedDirectivesComponent,
    LandingPageComponent,
    NgForDirectiveComponent,
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    EmployeeDetailsComponent,
    TextModifyDirective,
    HostListenerComponent,
    HostListenDirective,
    HostBindDirective,
    ContentProjectionComponent,
    CardComponent,
    ContainerComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
