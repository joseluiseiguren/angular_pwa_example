import { Component, ChangeDetectorRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'mainpage-root',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent {
  mobileQuery: MediaQueryList;
  
  constructor(private swUpdate: SwUpdate,
              changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;
}