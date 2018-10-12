import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fund, IFund } from '../../../shared/models/fund.model';
import { config } from '../../../config/app-settings.config';
import { map, catchError } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';
import { Observable } from 'rxjs';

export interface FundsResponse {
  funds: IFund[];
}
export interface FundResponse {
  fund: IFund;
}

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Fund[]> {
    return this.http.get<FundsResponse>(`${config.apiUrl}/funds`).pipe(
      map(fundsResponse => fundsResponse.funds.map(fund => new Fund(fund))),
      catchError(handleError('getAll', []))
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
