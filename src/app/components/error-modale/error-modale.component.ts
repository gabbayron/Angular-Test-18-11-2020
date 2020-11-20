import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modale',
  templateUrl: './error-modale.component.html',
  styleUrls: ['./error-modale.component.css']
})
export class ErrorModaleComponent implements OnInit {

  constructor(public dialog : MatDialog) { }
  
  ngOnInit(): void {
  }

}
