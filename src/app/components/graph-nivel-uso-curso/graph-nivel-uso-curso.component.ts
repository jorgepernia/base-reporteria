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
  public palette: string[];

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
    this.palette = ['#e56590', '#357cd2', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  }
}
