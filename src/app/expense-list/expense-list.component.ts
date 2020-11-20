import { Component, OnInit } from '@angular/core';
import { espenseEntry } from '../Model/Entries';
import { BudgetService } from '../Service/BudgetService';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenseEntry: espenseEntry[];
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.expenseEntry = this.budgetService.getExpenses();
  }

}
