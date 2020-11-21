import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { espenseEntry, savingsEntry } from '../Model/Entries';
import { BudgetService } from '../Service/BudgetService';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  closeResult = '';
  entryDate: Date;
  type: String;
  description: string;
  amount: number;

  dataModel: any = {};


  savingsEntry: savingsEntry;
  expenseEntry: espenseEntry;
  modalReference: NgbModalRef;
  constructor(private modalService: NgbModal,
              private budgetService: BudgetService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm) {
    if(this.dataModel.type == "Saving")
    {
      this.savingsEntry = new savingsEntry();
      this.savingsEntry.entryDate = this.dataModel.entryDate;
      this.savingsEntry.description = this.dataModel.description;
      this.savingsEntry.amount = this.dataModel.amount;
      
      this.budgetService.addSavings(this.savingsEntry);
    }
    else
    {
      this.expenseEntry = new espenseEntry();
      this.expenseEntry.entryDate = this.dataModel.entryDate;
      this.expenseEntry.description = this.dataModel.description;
      this.expenseEntry.amount = this.dataModel.amount;
      
      this.budgetService.addExpenses(this.expenseEntry);
    }
    this.modalReference.close();

  }

  openModal(content){
    this.modalReference = this.modalService.open(content);
      this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  open(content) {
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
