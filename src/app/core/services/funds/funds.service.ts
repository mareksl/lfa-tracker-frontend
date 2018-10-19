import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Fund, IFund } from '../../../shared/models/fund.model';
import { config } from '../../../config/app-settings.config';
import { map, catchError } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';
import { Observable } from 'rxjs';

export interface FundsResponse {
  funds: IFund[];

  count?: number;

  page?: number;
  limit?: number;
  pages?: number;
}
export interface FundResponse {
  fund: IFund;
}

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  constructor(private http: HttpClient) {}

  getRange(
    page: number,
    limit: number,
    query: string
  ): Observable<FundsResponse> {
    return this.http
      .get<FundsResponse>(`${config.apiUrl}/funds`, {
        params: new HttpParams()
          .set('page', `${page}`)
          .set('limit', `${limit}`)
          .set('q', `${query}`)
      })
      .pipe(
        map(fundsResponse => {
          const mappedFunds = fundsResponse.funds.map(
            (fund: IFund) => new Fund(fund)
          );
          fundsResponse.funds = mappedFunds;
          return fundsResponse;
        }),
        catchError(handleError('getRange', { funds: [] }))
      );
  }
  getById(id: number): Observable<Fund> {
    return this.http.get<FundResponse>(`${config.apiUrl}/funds/${id}`).pipe(
      map(fundResponse => new Fund(fundResponse.fund)),
      catchError(handleError('getById', null))
    );
  }

  removeAll() {
    return this.http.delete(`${config.apiUrl}/funds`);
  }
}
