import { Component, OnInit } from '@angular/core';
import { savingsEntry } from '../Model/Entries';
import { BudgetService } from '../Service/BudgetService';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  savingsEntry: savingsEntry[];
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.savingsEntry = this.budgetService.getSavings();
  }

}
