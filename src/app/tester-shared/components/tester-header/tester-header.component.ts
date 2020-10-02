import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tester-header',
  templateUrl: './tester-header.component.html',
  styleUrls: ['./tester-header.component.css']
})
export class TesterHeaderComponent implements OnInit {

  @Output() expandSidebarNow: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  expandSidebar(){
    this.expandSidebarNow.emit();
  }
}
