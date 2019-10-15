import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-nivel-uso',
  templateUrl: './graph-nivel-uso.component.html',
  styleUrls: ['./graph-nivel-uso.component.css']
})
export class GraphNivelUsoComponent implements OnInit {
  public piedata: Object[];
  public legendSettings: Object;
  public tooltip: Object;
  public palette: string[];

  constructor() { }

  ngOnInit() {
    this.piedata = [
      { x: 'LAB', y: 3, text: 'Jan: 3' },
      { x: 'HOG', y: 7, text: 'Mar: 7' },
    ];
    this.legendSettings = {
      visible: true
    };
    this.tooltip = {
      enable: true
    }
    this.palette = ['#e56590', '#357cd2', '#f8b883',
      '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  }
}
