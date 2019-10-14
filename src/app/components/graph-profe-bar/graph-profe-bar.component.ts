import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-profe-bar',
  templateUrl: './graph-profe-bar.component.html',
  styleUrls: ['./graph-profe-bar.component.css']
})
export class GraphProfeBarComponent implements OnInit {

  constructor() { }

  public primaryXAxis: Object;
  public chartData: Object[];
  public chartDataProfe: Object[];
  public title: string;
  public primaryYAxis: Object;
  public tooltip: Object;


  ngOnInit() {
    this.chartData = [
      { IDPROFE: "N14", CANTEJERICIOS: 50, CURSOS: 60 },
      { IDPROFE: "N15", CANTEJERICIOS: 70, CURSOS: 40 },
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
