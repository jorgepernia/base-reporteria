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
      { CURSO: "4A", TAREALAB: 50, TAREAHOG: 15 },
      { CURSO: "4B", TAREALAB: 70, TAREAHOG: 10 },
      { CURSO: "4C", TAREALAB: 40, TAREAHOG: 15 }
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      titleStyle: {
        size: '18px', color: '#333',
        fontWeight: 'bold'
      },
      labelStyle: {
        size: '16px', color: '#888',
        fontWeight: 'bold'
      }
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 100,
      interval: 20, title: 'Promedio',
      labelFormat: '{value}%',
      titleStyle: {
        size: '18px', color: '#333',
        fontWeight: 'bold'
      },
      labelStyle: {
        size: '12px', color: '#888',
        fontWeight: 'bold'
      }
    };
    this.tooltip = {
      enable: true
    }
    this.palette = ['#48C9B0', '#AF7AC5', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  }

}
