import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fund, IFund } from '../../../shared/models/fund.model';
import { config } from '../../../config/app-settings.config';
import { map, catchError } from 'rxjs/operators';
import { handleError } from '../../../shared/handlers/error.handler';

export interface FundsResponse {
  funds: IFund[];
}

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<FundsResponse>(`${config.apiUrl}/funds`).pipe(
      map(fundsResponse => fundsResponse.funds.map(fund => new Fund(fund))),
      catchError(handleError('getAll', []))
    );
  }
}
