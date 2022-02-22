import { DashboardOutput } from './../generated/graphql';
import { DASHBOARD_GRAPHQL } from './../graphql/dashboard';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apollo: Apollo) {}

  corona(): Observable<DashboardOutput> {
		return this.apollo

			.query({
				query: DASHBOARD_GRAPHQL.QUERIES.results,
				fetchPolicy: 'network-only',
			})

			.pipe(
				switchMap(({ data: { results } }: any) => {
					if (!results) throw null;
          console.log(results)
					return of(results as DashboardOutput);



				}),
				catchError(() => {
					throw null;
				})
			);

	}

}
