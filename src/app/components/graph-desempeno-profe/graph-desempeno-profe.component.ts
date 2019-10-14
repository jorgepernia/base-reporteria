import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-desempeno-profe',
  templateUrl: './graph-desempeno-profe.component.html',
  styleUrls: ['./graph-desempeno-profe.component.css']
})
export class GraphDesempenoProfeComponent implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  public chartDataProfe: Object[];
  public title: string;
  public primaryYAxis: Object;
  public tooltip: Object;

  constructor() { }

  ngOnInit() {
    this.chartData = [
      { IDPROFE: "N14", DESEMPENOPROFE: 80, DESEMPENOCURSO: 55 },
      { IDPROFE: "N15", DESEMPENOPROFE: 70, DESEMPENOCURSO: 65 },
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
