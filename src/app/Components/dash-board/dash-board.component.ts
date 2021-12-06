import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data service/data.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnDestroy {
  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  value:any;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private dataService:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  }

  searchTitle(event:any){
    console.log("input in search field===",event.target.value);
    this.value=event.target.value
    let Ddata={
      type:'search',
      data:[this.value]
    }
    this.dataService.changeData(Ddata)
  }

  notes() {
    this.router.navigateByUrl('/home/notes');
  };

  reminder() {
    this.router.navigateByUrl('/home/reminders');
  };

  editlabel() {
    this.router.navigateByUrl('/home');
  };

  archive() {
    this.router.navigateByUrl('/home/archive');
  };

  trash() {
    this.router.navigateByUrl('/home/trash');
  };
}

