import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private r: Router) { }

  backHome() {
    this.r.navigateByUrl('')
  }
  moveToActions() {
    this.r.navigateByUrl('actions')
  }

  ngOnInit(): void {
  }

}
