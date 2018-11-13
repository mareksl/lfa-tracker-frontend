import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fund, IFund } from '../../../shared/models/fund.model';
import { config } from '../../../config/app-settings.config';
import { map, catchError } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';
import { Observable, Subject } from 'rxjs';
import { User } from '../auth/auth.service';

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

export interface FundQuery {
  fundName?: string;
  orderBy?: string;
  desc?: string;
  ranks?: string;
  fundOwner?: string;
  lipperID?: string;
  awardUniverse?: string;
  department?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  fundsResponse: FundsResponse;
  fundsChanged: Subject<FundsResponse>;

  constructor(private http: HttpClient) {
    this.fundsChanged = new Subject<FundsResponse>();
  }

  getRange(page: number, limit: number, query: FundQuery) {
    return this.http
      .get<FundsResponse>(`${config.apiUrl}/funds`, {
        params: { page: `${page}`, limit: `${limit}`, ...query }
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
      )
      .subscribe((response: FundsResponse) => {
        this.fundsResponse = response;
        this.fundsChanged.next(this.fundsResponse);
      });
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
