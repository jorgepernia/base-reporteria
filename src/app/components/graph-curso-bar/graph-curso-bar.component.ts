import { Component, OnInit } from '@angular/core';

import { IPointRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-graph-curso-bar',
  templateUrl: './graph-curso-bar.component.html',
  styleUrls: ['./graph-curso-bar.component.css']
})
export class GraphCursoBarComponent implements OnInit {

  public primaryXAxis: Object;
  public chartData: Object[];
  public chartDataProfe: Object[];
  public title: string;
  public primaryYAxis: Object;
  public tooltip: Object;
  public pointRender(args: IPointRenderEventArgs): void {
    let seriesColor: string[] = ['#357cd2', '#e56590', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
    args.fill = seriesColor[args.point.index];
  };

  constructor() { }

  ngOnInit() {
    this.chartData = [
      { curso: "4A", CANTEJERICIOS: 50 },
      { curso: "4B", CANTEJERICIOS: 70 },
      { curso: "4C", CANTEJERICIOS: 40 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 100,
      interval: 20, title: 'Promedio'
    };
    this.tooltip = {
      enable: true
    }
  }

}
