import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.chartData = [
      { curso: "4A", CANTEJERICIOS: 50 },
      { curso: "4B", CANTEJERICIOS: 70 },
      { curso: "4C", CANTEJERICIOS: 40 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      // isIndexed: true,
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 80,
      interval: 20, title: 'Promedio'
    };
    this.title = 'Olympic Medals';
    this.tooltip = {
      enable: true
    }
  }

}
