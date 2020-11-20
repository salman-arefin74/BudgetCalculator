import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const appRoutes: Routes = [
  {path: '', redirectTo: '/BudgetCalculator', pathMatch: 'full'},
  {path: 'BudgetCalculator', component: AppComponent},
];
