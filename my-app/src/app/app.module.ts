import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { MedianAgeComponent } from './median-age/median-age.component';
import { LifeExpectancyComponent } from './life-expectancy/life-expectancy.component';
import { DiabetesPrevalenceComponent } from './diabetes-prevalence/diabetes-prevalence.component';
import { CardiovascDeathRateComponent } from './cardiovasc-death-rate/cardiovasc-death-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    MedianAgeComponent,
    LifeExpectancyComponent,
    DiabetesPrevalenceComponent,
    CardiovascDeathRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
