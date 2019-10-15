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
  public chartDataCurso: Object[];
  public chartDataProfe: Object[];
  public title: string;
  public primaryYAxis: Object;
  public tooltip: Object;
  public palette: string[];


  ngOnInit() {
    this.chartData = [
      { IDPROFE: "N14", CANTEJERICIOS: 50 },
      { IDPROFE: "N15", CANTEJERICIOS: 70 },
      { IDPROFE: "N15", CANTEJERICIOS: 50 },
    ];
    this.chartDataCurso = [
      { IDCURSO: "4A", CANTEJERICIOS: 40 },
      { IDCURSO: "4B", CANTEJERICIOS: 80 },
      { IDCURSO: "4C", CANTEJERICIOS: 70 },
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
    this.palette = ['#357cd2', '#dd8abd', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  }

}
