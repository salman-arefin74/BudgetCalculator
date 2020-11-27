import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { savingsEntry } from '../Model/Entries';
import { BudgetService } from '../Service/BudgetService';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  savingsEntry: savingsEntry[];
  timeLeft: number = 60;
  interval;
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.savingsEntry = this.budgetService.getSavings();
    this.startSavingsTimer();
  }

  startSavingsTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.savingsEntry = this.budgetService.getSavings();
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  Delete(data){
    var index = this.savingsEntry.indexOf(data);
    this.savingsEntry.splice(index, 1);
    localStorage.setItem('savings', JSON.stringify(this.savingsEntry));
  }

}
