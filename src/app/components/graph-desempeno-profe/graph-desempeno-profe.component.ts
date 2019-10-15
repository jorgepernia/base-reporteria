import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-desempeno-profe',
  templateUrl: './graph-desempeno-profe.component.html',
  styleUrls: ['./graph-desempeno-profe.component.css']
})
export class GraphDesempenoProfeComponent implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  public chartDataCurso: Object[];
  public title: string;
  public primaryYAxis: Object;
  public tooltip: Object;
  public palette: string[];

  constructor() { }

  ngOnInit() {
    this.chartData = [
      { IDPROFE: "N14", DESEMPENOPROFE: 30 },
      { IDPROFE: "N15", DESEMPENOPROFE: 50 },
      { IDPROFE: "N15", DESEMPENOPROFE: 60 },
    ];
    this.chartDataCurso = [
      { IDCURSO: "4A", DESEMPENOCURSO: 20 },
      { IDCURSO: "4B", DESEMPENOCURSO: 40 },
      { IDCURSO: "4C", DESEMPENOCURSO: 80 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      isIndexed: true,
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 100,
      interval: 20, title: 'Promedio'
    };
    this.title = 'Olympic Medals';
    this.tooltip = {
      enable: true
    }
    this.palette = ['#3498DB', '#58D68D', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  }

}
