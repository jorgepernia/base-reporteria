import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-profe',
  templateUrl: './graph-profe.component.html',
  styleUrls: ['./graph-profe.component.css']
})
export class GraphProfeComponent implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  public chartData2: Object[];
  public primaryYAxis: Object;
  public legendSettings: Object;
  public tooltip: Object;
  public title: string;
  public marker: Object;

  constructor() { }

  ngOnInit() {
    // Tooltip for chart
    this.tooltip = {
      enable: true
    }
    this.chartData = [
      { NOMBREDIA: 'Lunes', sales: 35, idprofe: 'N14' },
      { NOMBREDIA: 'Martes', sales: 34, idprofe: 'N14' },
      { NOMBREDIA: 'Miercoles', sales: 40, idprofe: 'N14' },
      { NOMBREDIA: 'Jueves', sales: 35, idprofe: 'N14' },
      { NOMBREDIA: 'viernes', sales: 38, idprofe: 'N14' },
      { NOMBREDIA: 'Sabado', sales: 25, idprofe: 'N14' },
      { NOMBREDIA: 'Domingo', sales: 28, idprofe: 'N14' },
    ];
    this.chartData2 = [
      { NOMBREDIA: 'Lunes', sales: 25 },
      { NOMBREDIA: 'Martes', sales: 24 },
      { NOMBREDIA: 'Miercoles', sales: 50 },
      { NOMBREDIA: 'Jueves', sales: 25 },
      { NOMBREDIA: 'viernes', sales: 68 },
      { NOMBREDIA: 'Sabado', sales: 35 },
      { NOMBREDIA: 'Domingo', sales: 18 },
    ];
    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.primaryYAxis = {
      // labelFormat: '${value}K'
    };

    this.marker = { visible: true, width: 10, height: 10, shape: 'Circle' };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Sales Analysis';
  }

}
