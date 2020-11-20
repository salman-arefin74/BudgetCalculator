import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalBudgetComponent } from './total-budget/total-budget.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetService } from './Service/BudgetService';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TotalBudgetComponent,
    IncomeListComponent,
    ExpenseListComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

