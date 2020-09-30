import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarState = true;

  constructor() { }

  ngOnInit(): void {
  }

  expandFunction($event){
    this.sideBarState = !this.sideBarState;
  }
}
