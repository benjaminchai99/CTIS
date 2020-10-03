import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester-default',
  templateUrl: './tester-default.component.html',
  styleUrls: ['./tester-default.component.scss']
})
export class TesterDefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {}

  sideBarToggler($event){
    this.sideBarOpen = !this.sideBarOpen;
  }
}