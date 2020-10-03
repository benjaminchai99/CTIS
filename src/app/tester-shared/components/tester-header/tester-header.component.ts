import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tester-header',
  templateUrl: './tester-header.component.html',
  styleUrls: ['./tester-header.component.scss']
})
export class TesterHeaderComponent implements OnInit {

  @Output() toogleSideBarForMe: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {} 

  toggleSideBar() {
    this.toogleSideBarForMe.emit();
  }

}