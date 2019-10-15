import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-tareas',
  templateUrl: './graph-tareas.component.html',
  styleUrls: ['./graph-tareas.component.css']
})
export class GraphTareasComponent implements OnInit {

  public primaryXAxis: Object;
  public chartData: Object[];
  public chartDataProfe: Object[];
  public title: string;
  public primaryYAxis: Object;
  public tooltip: Object;
  public palette: string[];

  constructor() { }

  ngOnInit() {
    this.chartData = [
      { curso: "4A", TAREASREALIZADAS: 50, IESTRABAJASDOS: 15 },
      { curso: "4B", TAREASREALIZADAS: 70, IESTRABAJASDOS: 10 },
      { curso: "4C", TAREASREALIZADAS: 40, IESTRABAJASDOS: 15 }
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
    this.palette = ['#357cd2', '#f8b883', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  }

}
