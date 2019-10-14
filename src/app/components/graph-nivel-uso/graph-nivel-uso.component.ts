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
  }

}
