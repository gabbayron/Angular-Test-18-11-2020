import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(public fb: FormBuilder, public actionsService: ActionsService) { }

  myForm: FormGroup = new FormGroup({})

  actions = ['Deposit', 'Withdraw', 'Loan']
  selectedAction: string = ""
  msg: string = ""

  handleClick() {
    if ((this.myForm.value.payments == 0 || this.myForm.value.intrest == 0) && this.selectedAction === "Loan") {
      return alert('Make Sure Intrest And Payments Are Not 0')
    }
    this.actionsService.addAction(this.myForm.value).subscribe(
      res => {
        this.msg = "Added Successfully"
        this.ngOnInit()
        this.selectedAction = ""
        setTimeout(() => {
          this.msg = ""
        }, 2000);
      },
      err => console.log(err)
    )
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      account_number: ['', Validators.required],
      action: ["", Validators.required],
      amount: ['', Validators.required],
      payments: [0, Validators.required,],
      intrest: [0, Validators.required]
    })
  }

}
