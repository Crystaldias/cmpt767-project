import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationContainerComponent } from './vaccination-container/vaccination-container.component';
import { HospitalizationsContainerComponent } from './hospitalizations-container/hospitalizations-container.component';

const routes: Routes = [

  { path: 'vaccinations-icu-admissions', component: VaccinationContainerComponent },
  { path: 'vaccinations-hospitalizations', component: HospitalizationsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }