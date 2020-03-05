import { Component, OnInit, OnDestroy } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin-service/bitcoin-service.service';
import { ChartService } from 'src/app/services/chart-service/chart-service.service';
import ChartModel from 'src/app/models/chart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit, OnDestroy {

  rate: number;
  rateSubscriber: Subscription
  chart1: ChartModel;
  chart1Subscriber: Subscription
  chart2: ChartModel
  chart2Subscriber: Subscription


  constructor(public bitcoinService: BitcoinService, public chartService: ChartService) { }

  ngOnInit() {
    this.rateSubscriber = this.bitcoinService.getBitCoinRate(1).subscribe(rate => {
      this.rate = rate;
    })
    this.chart1Subscriber = this.bitcoinService.getMarketPrice().subscribe(data => {
      this.chart1 = this.chartService.createChart(data.name, 'LineChart', data.values, ['Date', 'Price'])
    })
    this.chart2Subscriber = this.bitcoinService.getConfirmedTransactions().subscribe(data => {
      this.chart2 = this.chartService.createChart(data.name, 'LineChart', data.values, ['Date', 'Daily Transactions'])
    })
  }

  ngOnDestroy() {
    this.rateSubscriber.unsubscribe();
    this.chart1Subscriber.unsubscribe();
    this.chart2Subscriber.unsubscribe();
  }

}
