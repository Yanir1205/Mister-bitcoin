import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import ChartModel from 'src/app/models/chart.model';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() chart: ChartModel;
  myOptions: Object
  ngOnChanges(changes: SimpleChanges): void {
    const newData = changes.chart.currentValue.data.map(item => {
      return [item.x, item.y]
    })
    this.chart.data = newData
    this.myOptions = {
      //graph animation:
      animation: {
        duration: 1000,
        easing: 'ease-int-out',
        startup: true
      },
      width: 550,
      height: 350,
      colors: ['#ed4d6e'],
      curveType: 'function',
      backgroundColor: 'transparent',
      // chartArea: { width: '65%'},
      titleTextStyle: {
        color: 'white',
        fontSize: 16, 
        bold: false, 
        italic: false
      },
      hAxis: { textStyle: { color: 'white' } },
      vAxis: { textStyle: { color: 'white' } },
      legend: { textStyle: { color: 'white' } },
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}