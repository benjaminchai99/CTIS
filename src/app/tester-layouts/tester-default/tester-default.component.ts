import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-default',
  templateUrl: './tester-default.component.html',
  styleUrls: ['./tester-default.component.scss']
})
export class TesterDefaultComponent implements OnInit, OnDestroy {
  title = 'flex-tutorial';
  mediaSub: Subscription;
  deviceXs: boolean;
  sideBarOpen = true;

  constructor(public mediaObserver: MediaObserver, public authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
  sideBarToggler($event){
    this.sideBarOpen = !this.sideBarOpen;
  }
}