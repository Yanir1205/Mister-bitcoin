import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ChartModel from 'src/app/models/chart.model';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)

export class BitcoinService {

  constructor(private http: HttpClient) { }

  getBitCoinRate(coins: number): Observable<number> {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
  }

  getMarketPrice(): Observable<any> {
    return this.http.get<any>(`https://api.blockchain.info/charts/market-price?timespan=1week&format=json&cors=true`);
  }

  getConfirmedTransactions(): Observable<any> {
    return this.http.get<any>(`https://api.blockchain.info/charts/n-transactions?timespan=1week&format=json&cors=true`);
  }

}
