import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { UnderweightComponent } from './nutrition/underweight/underweight.component';
import { OverrweightComponent } from './nutrition/overrweight/overrweight.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'register', component: CreateRegistrationComponent },
  { path: 'list', component: RegistrationListComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'underweight', component: UnderweightComponent },
  { path: 'overweight', component: OverrweightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
