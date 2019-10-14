import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-nivel-uso-curso',
  templateUrl: './graph-nivel-uso-curso.component.html',
  styleUrls: ['./graph-nivel-uso-curso.component.css']
})
export class GraphNivelUsoCursoComponent implements OnInit {

  public piedata: Object[];
  public legendSettings: Object;
  public tooltip: Object;

  constructor() { }

  ngOnInit() {
    this.piedata = [
      { x: 'Laboratorio', y: 8 },
      { x: 'Hogar', y: 5 },
    ];
    this.legendSettings = {
      visible: true,
      position: 'Bottom',
      alignment: 'Center'
    };
    this.tooltip = {
      enable: true
    }
  }

}
