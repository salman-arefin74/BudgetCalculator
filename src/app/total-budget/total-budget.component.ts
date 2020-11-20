import { Component, OnInit } from '@angular/core';
import { espenseEntry, savingsEntry } from '../Model/Entries';
import { BudgetService } from '../Service/BudgetService';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.css']
})
export class TotalBudgetComponent implements OnInit {

  totalBudget: number;
  totalSavings: number;
  totalExpenses: number;

  savingsEntry: savingsEntry[];
  expenseEntry: espenseEntry[];
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.load();
    this.savingsEntry = this.budgetService.getSavings();
    this.expenseEntry = this.budgetService.getExpenses();
    this.getAmount()
  }

  getAmount(){
    let savingsAmount = 0;
    let expensesAmount = 0;

    for(var i = 0; i < this.savingsEntry.length; i++) {
      var obj = this.savingsEntry[i];
      savingsAmount = savingsAmount + obj.amount;  
    }

    for(var i = 0; i < this.expenseEntry.length; i++) {
      var obj = this.expenseEntry[i];
      expensesAmount = expensesAmount + obj.amount;  
    }

    this.totalSavings = savingsAmount;
    this.totalExpenses = expensesAmount;
    this.totalBudget = this.totalSavings - this.totalExpenses;

  }
  load() {
    if(localStorage.getItem('savings') === null || localStorage.getItem('savings') == undefined) {
      console.log('No employees Found... Creating...');
      let savingsEntry = [
        {
          entryDate:'2020-11-1',
          description:'Salary',
          amount: 30000
        }, 
        {
          entryDate:'2020-11-5',
          description:'Bonus',
          amount: 10000
        }, {
          entryDate:'2020-11-12',
          description:'Overtime',
          amount: 5000
        },
      ];

      localStorage.setItem('savings', JSON.stringify(savingsEntry));
    }
    
    if(localStorage.getItem('expenses') === null || localStorage.getItem('expenses') == undefined) {
      console.log('No employees Found... Creating...');
      let expenseEntry = [
        {
          entryDate:'2020-11-2',
          description:'Tour',
          amount: 2000
        }, 
        {
          entryDate:'2020-11-8',
          description:'Shopping',
          amount: 10000
        }, {
          entryDate:'2020-11-15',
          description:'Dinner',
          amount: 3000
        },
      ];

      localStorage.setItem('expenses', JSON.stringify(expenseEntry));
    }
    
  }

}
