import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-desempeno',
  templateUrl: './graph-desempeno.component.html',
  styleUrls: ['./graph-desempeno.component.css']
})
export class GraphDesempenoComponent implements OnInit {

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
      minimum: 0, maximum: 100,
      interval: 20, title: 'Promedio'
    };
    this.title = 'Olympic Medals';
    this.tooltip = {
      enable: true
    }
  }
}