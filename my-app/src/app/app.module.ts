import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from "./chart/chart.component";
import { AsiaHospitalizationLineComponent } from './asia-hospitalization-line/asia-hospitalization-line.component';
import { AfricaHospitalizationLineComponent } from './africa-hospitalization-line/africa-hospitalization-line.component';
import { EuropeHospitalizationLineComponent } from './europe-hospitalization-line/europe-hospitalization-line.component';
import { NorthamericaHospitalizationLineComponent } from './northamerica-hospitalization-line/northamerica-hospitalization-line.component';
import { SouthamericaHospitalizationLineComponent } from './southamerica-hospitalization-line/southamerica-hospitalization-line.component';
import { OceaniaHospitalizationLineComponent } from './oceania-hospitalization-line/oceania-hospitalization-line.component';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule, ChartModule
  ],
  declarations: [ChartComponent, AppComponent, AsiaHospitalizationLineComponent, AfricaHospitalizationLineComponent, EuropeHospitalizationLineComponent, NorthamericaHospitalizationLineComponent, SouthamericaHospitalizationLineComponent, OceaniaHospitalizationLineComponent],
  bootstrap: [AppComponent],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService]
})
export class AppModule { }