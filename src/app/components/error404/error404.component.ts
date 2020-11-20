import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorModaleComponent } from '../error-modale/error-modale.component';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(public dialog: MatDialog, private r: Router) { }

  ngOnInit(): void {
    this.dialog.open(ErrorModaleComponent)
    this.dialog.afterAllClosed.subscribe(res => this.r.navigateByUrl(''))
  }

}
