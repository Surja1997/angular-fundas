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
@NgModule({
  declarations: [
    AppComponent,
    PredefinedDirectivesComponent,
    LandingPageComponent,
    NgForDirectiveComponent,
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent,
    InterpolationComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
