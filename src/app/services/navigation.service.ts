import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NavigationService { 

  activatedComponentSubject = new Subject<string>();

  navigationData(component:string) {
    this.activatedComponentSubject.next(component);
  }
}