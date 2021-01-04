import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styles: [
  ]
})
export class DoughnutGraphComponent implements OnInit {
  @Input()
  title: string = 'Title';

  // Doughnut
  @Input('labels')
  chartLabels: Label[] = [];

  @Input('data')
  chartData: MultiDataSet = [];

  @Input('type')
  chartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}

}
