import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public accountService: AccountsService) { }

  accountNumber = '';
  msg = ""
  handleClear() {
    this.accountService.account = []
    this.accountNumber = ""
  }

  handleClick(id: string) {
    this.accountService.getAccountActions(id).subscribe(
      (res: any) => {
        if (res.length === 0) {
          this.msg = "This Account Have No Actions"
          setTimeout(() => {
            this.msg = ''
          }, 2000);
        }
        this.accountService.account = res
      },
      err => { console.log(err) }
    )
  }

  ngOnInit(): void {
    this.accountService.account = []
    this.accountNumber = ""
  }

}
