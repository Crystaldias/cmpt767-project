import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, SplineSeriesService, LegendService, TooltipService, DataLabelService, LineSeriesService, SplineRangeAreaSeriesService, StackingStepAreaSeriesService, SplineAreaSeriesService, AreaSeriesService, MultiColoredAreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, DateTimeService } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from "./chart/chart.component";
import { AsiaHospitalizationLineComponent } from './asia-hospitalization-line/asia-hospitalization-line.component';
import { AfricaHospitalizationLineComponent } from './africa-hospitalization-line/africa-hospitalization-line.component';
import { EuropeHospitalizationLineComponent } from './europe-hospitalization-line/europe-hospitalization-line.component';
import { NorthamericaHospitalizationLineComponent } from './northamerica-hospitalization-line/northamerica-hospitalization-line.component';
import { SouthamericaHospitalizationLineComponent } from './southamerica-hospitalization-line/southamerica-hospitalization-line.component';
import { OceaniaHospitalizationLineComponent } from './oceania-hospitalization-line/oceania-hospitalization-line.component';
import { AsiaVaccinationSplineComponent } from './asia-vaccination-spline/asia-vaccination-spline.component';
import { AfricaVaccinationSplineComponent } from './africa-vaccination-spline/africa-vaccination-spline.component';
import { EuropeVaccinationSplineComponent } from './europe-vaccination-spline/europe-vaccination-spline.component';
import { NorthamericaVaccinationSplineComponent } from './northamerica-vaccination-spline/northamerica-vaccination-spline.component';
import { SouthamericaVaccinationSplineComponent } from './southamerica-vaccination-spline/southamerica-vaccination-spline.component';
import { VaccinationContainerComponent } from './vaccination-container/vaccination-container.component';
import { HospitalizationsContainerComponent } from './hospitalizations-container/hospitalizations-container.component'; // Import the AppRoutingModule


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ChartModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ChartComponent, AsiaHospitalizationLineComponent, AfricaHospitalizationLineComponent, EuropeHospitalizationLineComponent, NorthamericaHospitalizationLineComponent, SouthamericaHospitalizationLineComponent, OceaniaHospitalizationLineComponent, AsiaVaccinationSplineComponent, AfricaVaccinationSplineComponent, EuropeVaccinationSplineComponent, NorthamericaVaccinationSplineComponent, SouthamericaVaccinationSplineComponent, VaccinationContainerComponent, HospitalizationsContainerComponent

  ],
  // providers:[],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService, SplineAreaSeriesService, SplineSeriesService, AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
    DateTimeService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
