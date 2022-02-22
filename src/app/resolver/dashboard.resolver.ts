import { DashboardService } from './../services/dashboard.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable()
export class DashboardResolver implements Resolve<boolean> {
	constructor(private dashboardService: DashboardService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({

		corona: this.dashboardService.corona(),

	});
  }
}




