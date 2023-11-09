import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { AfricaHospitalizationLineComponent } from 'app/africa-hospitalization-line/africa-hospitalization-line.component';
import { AfricaVaccinationSplineComponent } from 'app/africa-vaccination-spline/africa-vaccination-spline.component';
import { AsiaHospitalizationLineComponent } from 'app/asia-hospitalization-line/asia-hospitalization-line.component';
import { AsiaVaccinationSplineComponent } from 'app/asia-vaccination-spline/asia-vaccination-spline.component';
import { EuropeHospitalizationLineComponent } from 'app/europe-hospitalization-line/europe-hospitalization-line.component';
import { EuropeVaccinationSplineComponent } from 'app/europe-vaccination-spline/europe-vaccination-spline.component';
import { HospitalizationsContainerComponent } from 'app/hospitalizations-container/hospitalizations-container.component';
import { NorthamericaHospitalizationLineComponent } from 'app/northamerica-hospitalization-line/northamerica-hospitalization-line.component';
import { NorthamericaVaccinationSplineComponent } from 'app/northamerica-vaccination-spline/northamerica-vaccination-spline.component';
import { OceaniaHospitalizationLineComponent } from 'app/oceania-hospitalization-line/oceania-hospitalization-line.component';
import { SouthamericaHospitalizationLineComponent } from 'app/southamerica-hospitalization-line/southamerica-hospitalization-line.component';
import { SouthamericaVaccinationSplineComponent } from 'app/southamerica-vaccination-spline/southamerica-vaccination-spline.component';
import { VaccinationContainerComponent } from 'app/vaccination-container/vaccination-container.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

    // ChartComponent, 
    // AsiaHospitalizationLineComponent, AfricaHospitalizationLineComponent, EuropeHospitalizationLineComponent, NorthamericaHospitalizationLineComponent, SouthamericaHospitalizationLineComponent, OceaniaHospitalizationLineComponent, AsiaVaccinationSplineComponent, AfricaVaccinationSplineComponent, EuropeVaccinationSplineComponent, NorthamericaVaccinationSplineComponent, SouthamericaVaccinationSplineComponent, VaccinationContainerComponent, HospitalizationsContainerComponent
  ],
 })

export class AdminLayoutModule {}
