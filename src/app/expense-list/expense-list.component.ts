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
  timeLeft: number = 60;
  interval;
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.expenseEntry = this.budgetService.getExpenses();
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.expenseEntry = this.budgetService.getExpenses();
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  Delete(data){
    var index = this.expenseEntry.indexOf(data);
    this.expenseEntry.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(this.expenseEntry));
  }

}
